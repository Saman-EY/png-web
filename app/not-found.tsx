import { redirect } from "next/navigation";

export default function NotFound() {
  // Redirect all 404s to the landing page
  redirect("/");
}
