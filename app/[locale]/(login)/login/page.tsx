"use client";
import { use, useState } from "react";
import "./login-syle.css";
import { useTranslations } from "next-intl";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<{ email?: string; password?: string }>({});
  const [success, setSuccess] = useState(false);

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
      setSuccess(true);
      setTimeout(() => {
        console.log("Redirecting...");
      }, 2000);
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

            {/* <div className="form-options">
            <label className="remember-wrapper">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              <span className="checkbox-label">
                <span className="checkmark"></span>
                Remember me
              </span>
            </label>
            <a href="#" className="forgot-password">
              Forgot password?
            </a>
          </div> */}

            <button type="submit" className="login-btn btn">
              <span className="btn-text">{t("signInBtn")}</span>
              <span className="btn-loader"></span>
            </button>
          </form>
          {/* 
        <div className="divider">
          <span>or continue with</span>
        </div>

        <div className="social-login">
          <button type="button" className="social-btn google-btn">
            <span className="social-icon google-icon"></span>
            Google
          </button>
          <button type="button" className="social-btn github-btn">
            <span className="social-icon github-icon"></span>
            GitHub
          </button>
        </div> */}

          <div className="signup-link">
            <p>
              {t("xtext")} <a href="#">{t("signupLink")}</a>
            </p>
          </div>

          {/* {success && (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <h3>Login Successful!</h3>
              <p>Redirecting to your dashboard...</p>
            </div>
          )} */}
        </div>
      </div>
    </section>
  );
};

export default Login;
