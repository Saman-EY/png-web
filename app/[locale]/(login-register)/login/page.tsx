"use client";
import { useState } from "react";
import "../login-syle.css";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useLoginUser } from "@/hooks/mutation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<{ email?: string; password?: string }>({});
  const [success, setSuccess] = useState(false);
  const { mutate, isPending, isSuccess, error: registerError } = useLoginUser();

  const t = useTranslations("loginPage");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Simple validation
    const newErrors: typeof error = {};
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";

    setError(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // fake success

      mutate({
        email: email,
        password: password,
      });
    }
  };

  console.log(error, success);

  return (
    <section className="main-container">
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <h2>{t("welcome")}</h2>
            <p>{t("text")}</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <div className="input-wrapper">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  // autoComplete="off"
                  value={email}
                  placeholder={t("emailPlace")}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {/* <label htmlFor="email">Email Address</label> */}
                <span className="focus-border"></span>
              </div>
              {error.email && <span className="text-red-400 text-xs mt-2 px-2">{error.email}</span>}
            </div>

            <div className="form-group">
              <div className="input-wrapper password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder={t("passPlace")}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {/* <label htmlFor="password">Password</label> */}
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Toggle password visibility"
                >
                  <span className="eye-icon"></span>
                </button>
                <span className="focus-border"></span>
              </div>
              {error.password && <span className="text-red-400 text-xs mt-2 px-2">{error.password}</span>}
            </div>

            <button disabled={isPending} type="submit" className="login-btn btn">
              {isPending ? <span className="btn-loader"></span> : <span className="btn-text">{t("signInBtn")}</span>}
            </button>
          </form>

          <div className="signup-link">
            <p>
              {t("xtext")} <Link href="/register">{t("signupLink")}</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
