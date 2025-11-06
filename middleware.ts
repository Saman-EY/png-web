// middleware.ts
import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { routing } from "./i18n/routing";
import { cookies } from "next/headers";

const intlMiddleware = createMiddleware(routing);

export async function middleware(req: NextRequest) {
  // First apply i18n middleware
  const response = intlMiddleware(req);

  const token = req.cookies.get("token")?.value;
  const url = req.nextUrl;

  // Extract locale from pathname — e.g. /en/dashboard → "en"
  const locale = url.pathname.split("/")[1];
  const pathWithoutLocale = "/" + url.pathname.split("/").slice(2).join("/");

  const isAuthPage = ["/login", "/register"].includes(pathWithoutLocale);
  const isDashboard = pathWithoutLocale.startsWith("/dashboard");

  if (!token && isDashboard) {
    const res = NextResponse.redirect(new URL(`/${locale}/login`, req.url));
    return res;
    // return NextResponse.redirect(new URL("/login", req.url));
  }

  if (token) {
    const isValid = await validateToken(token);
    if (!isValid) {
      const newToken = await refreshToken();
      if (newToken) {
        const res = NextResponse.next();
        (await cookies()).set("token", newToken, {
          path: "/",
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
        });
        return res;
      } else {
        const res = NextResponse.redirect(new URL(`/login`, req.url));
        return res;
      }
    }
    if (isAuthPage) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
  }

  return response;
}

// ✅ Validate token with backend
async function validateToken(token: string): Promise<boolean> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });
    return res.ok;
  } catch (err) {
    console.error("💥Token validation failed:", err);
    return false;
  }
}

// ✅ Refresh token if expired
async function refreshToken(): Promise<string | null> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL2}/auth/refresh`, {
      method: "POST",
      credentials: "include",
    });

    if (!res.ok) return null;

    const data = await res.json();
    return data.access_token;
  } catch (e) {
    console.error("Refresh token error:", e);
    (await cookies()).delete("token");
    return null;
  }
}

export const config = {
  matcher: ["/((?!api|trpc|_next|_vercel|.*\\..*).*)"],
};

// before:
// import createMiddleware from "next-intl/middleware";
// import { routing } from "./i18n/routing";
// export default createMiddleware(routing);
// export const config = { matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)" };
