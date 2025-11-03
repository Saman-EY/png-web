"use client";
import { useState } from "react";
import "../login-syle.css";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRegisterUser } from "@/hooks/mutation";

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState<{
    email?: string;
    password?: string;
    confirmPassword?: string;
    username?: string;
  }>({});
  const t = useTranslations("registerPage");
  const { mutate, isPending, isSuccess, error: registerError } = useRegisterUser();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Simple validation
    const newErrors: typeof error = {};
    if (!username) newErrors.username = "Username is required";
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    if (!confirmPassword) newErrors.confirmPassword = "Confirm Password is required";
    if (password !== confirmPassword) newErrors.confirmPassword = "Passwords do not match";

    console.log("*", newErrors);

    setError(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // fake success
      console.log("**", "submit");
      mutate({
        name: username,
        email: email,
        password: password,
        password_confirmation: confirmPassword,
      });
    }
  };

  console.log(error);

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
                  type="username"
                  id="username"
                  name="username"
                  required
                  autoComplete="off"
                  value={username}
                  placeholder={t("namePlace")}
                  onChange={(e) => setUsername(e.target.value)}
                  onInput={(e) => {
                    setError((prev) => ({
                      ...prev,
                      username: "",
                    }));

                    e.currentTarget.value = e.currentTarget.value.replace(/^\s+/, "");
                  }}
                />
                <span className="focus-border"></span>
              </div>
              {error.username && <span className="text-red-400 text-xs mt-2 px-2">{error.username}</span>}
            </div>
            <div className="form-group">
              <div className="input-wrapper">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  autoComplete="off"
                  value={email}
                  placeholder={t("emailPlace")}
                  onChange={(e) => setEmail(e.target.value)}
                  onInput={(e) => {
                    setError((prev) => ({
                      ...prev,
                      email: "",
                    }));

                    e.currentTarget.value = e.currentTarget.value.replace(/^\s+/, "");
                  }}
                />
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
                  autoComplete="off"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onInput={(e) => {
                    setError((prev) => ({
                      ...prev,
                      password: "",
                    }));

                    e.currentTarget.value = e.currentTarget.value.replace(/^\s+/, "");
                  }}
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
            <div className="form-group">
              <div className="input-wrapper password-wrapper">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirm-password"
                  name="confirm-password"
                  placeholder={t("confirmPassPlace")}
                  autoComplete="off"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  onInput={(e) => {
                    setError((prev) => ({
                      ...prev,
                      confirmPassword: "",
                    }));

                    e.currentTarget.value = e.currentTarget.value.replace(/^\s+/, "");
                  }}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  aria-label="Toggle password visibility"
                >
                  <span className="eye-icon"></span>
                </button>
                <span className="focus-border"></span>
              </div>
              {error.confirmPassword && <span className="text-red-400 text-xs mt-2 px-2">{error.confirmPassword}</span>}
            </div>
            <button disabled={isPending} type="submit" className="login-btn btn">
              {isPending ? <span className="btn-loader"></span> : <span className="btn-text">{t("registerBtn")}</span>}
            </button>
          </form>

          <div className="signup-link">
            <p>
              {t("xtext")} <Link href="/login">{t("signInLink")}</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
