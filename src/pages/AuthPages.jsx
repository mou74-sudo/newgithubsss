import { Link } from 'react-router-dom'

function BrandMark() {
  return (
    <div className="brand" aria-label="bu banking">
      <div className="logo" aria-hidden="true">
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="7" y="7" width="50" height="50" rx="18" fill="white" fillOpacity="0.12" />
          <path d="M18 24.5C18 18.7 21.9 15 28.1 15H33.8C40.1 15 44 18.7 44 24.5V39.5C44 45.3 40.1 49 33.8 49H28.1C21.9 49 18 45.3 18 39.5V24.5ZM28.5 20.1C24.7 20.1 22.9 22 22.9 25.2V38.8C22.9 42.1 24.7 43.9 28.5 43.9H30.4V20.1H28.5ZM35.4 43.9C39.2 43.9 41.1 42.1 41.1 38.8V25.2C41.1 22 39.2 20.1 35.4 20.1H33.5V43.9H35.4Z" fill="white" />
        </svg>
      </div>
      <div className="brand-text">
        <strong>bu banking</strong>
        <small>Simple. Secure. Yours.</small>
      </div>
    </div>
  )
}

function AuthShell({ title, description, children }) {
  return (
    <main className="page">
      <div className="shell">
        <section className="hero" aria-labelledby="welcome-heading">
          <div className="hero-topbar">
            <BrandMark />
          </div>

          <div className="hero-copy">
            <div className="tagline">Distinctive digital banking</div>
            <h1 id="welcome-heading">{title}</h1>
            <p>{description}</p>
          </div>

          <div className="hero-spacer" aria-hidden="true" />
        </section>

        <section className="card-wrap" aria-label="Auth panel">
          <div className="card">{children}</div>
        </section>
      </div>
    </main>
  )
}

export function LoginPage() {
  return (
    <AuthShell
      title="Secure banking with a calmer, clearer feel."
      description="bu banking is designed to feel modern without becoming flashy — with a cleaner look, a softer premium edge, and a more distinctive identity across every auth screen."
    >
      <span className="eyebrow" aria-label="Security notice">✦ Secure login</span>
      <h2>Welcome back</h2>
      <p className="card-intro">Sign in with your email or customer ID. The page stays laptop-first, one-screen, and consistent with the bu banking brand language.</p>

      <div className="shortcut-row" aria-label="Secondary actions">
        <Link className="shortcut" to="/signup">Create account</Link>
        <Link className="shortcut" to="/forgot-password">Reset password</Link>
        <span className="shortcut">React build</span>
      </div>

      <form className="form-grid">
        <div className="field">
          <label htmlFor="identity">Email or customer ID</label>
          <span className="hint" id="identity-hint">Example: alex@email.com or 12345678</span>
          <input id="identity" type="text" autoComplete="username" aria-describedby="identity-hint" placeholder="Enter your email or customer ID" />
        </div>

        <div className="field">
          <div className="inline-row">
            <label htmlFor="password">Password</label>
            <Link to="/forgot-password">Forgot password?</Link>
          </div>
          <input id="password" type="password" autoComplete="current-password" placeholder="Enter your password" />
        </div>

        <div className="inline-row">
          <label className="check" htmlFor="remember-me">
            <input id="remember-me" type="checkbox" />
            <span>Remember this device for 30 days</span>
          </label>
          <a href="#">Security tips</a>
        </div>

        <button className="btn btn-primary" type="button">Log in securely</button>
        <div className="or">or</div>
        <button className="btn btn-secondary" type="button">Use Face ID / Fingerprint</button>
        <span className="hint">Available on supported devices and browsers.</span>
      </form>

      <div className="support-box" role="note" aria-label="Help and support">
        <strong>Need help getting in?</strong>
        Recover your account, unlock access, or report suspicious activity right away.
        <div className="sub-links">
          <Link to="/signup">Open a new account</Link>
          <Link to="/forgot-password">Recover account</Link>
          <a href="#">Report fraud</a>
        </div>
      </div>

      <p className="legal">By continuing, you agree to secure device checks and fraud monitoring designed to protect your account.</p>

      <footer className="site-footer" aria-label="Footer links">
        <span>© 2026 bu banking</span>
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Security</a>
          <a href="#">Accessibility</a>
          <a href="#">Help</a>
          <a href="#">Terms</a>
        </div>
      </footer>
    </AuthShell>
  )
}

export function SignupPage() {
  return (
    <AuthShell
      title="Open your account in minutes."
      description="A cleaner onboarding flow with the same bu banking look carried through every step."
    >
      <Link className="back-link" to="/">← Back to login</Link>
      <span className="eyebrow">✦ Distinctive onboarding</span>
      <h2>Create account</h2>
      <p className="card-intro">Use this page as the first step in the bu banking onboarding flow.</p>

      <form className="form-grid">
        <div className="split-two">
          <div className="field">
            <label htmlFor="first">First name</label>
            <input id="first" type="text" placeholder="Alex" />
          </div>
          <div className="field">
            <label htmlFor="last">Last name</label>
            <input id="last" type="text" placeholder="Taylor" />
          </div>
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="alex@email.com" />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone number</label>
          <input id="phone" type="tel" placeholder="07123 456789" />
        </div>
        <div className="split-two">
          <div className="field">
            <label htmlFor="pass">Create password</label>
            <input id="pass" type="password" placeholder="Create a secure password" />
          </div>
          <div className="field">
            <label htmlFor="confirm">Confirm password</label>
            <input id="confirm" type="password" placeholder="Repeat password" />
          </div>
        </div>
        <button className="btn btn-primary" type="button">Continue</button>
      </form>

      <footer className="site-footer" aria-label="Footer links">
        <span>© 2026 bu banking</span>
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Security</a>
          <a href="#">Accessibility</a>
          <a href="#">Help</a>
          <a href="#">Terms</a>
        </div>
      </footer>
    </AuthShell>
  )
}

export function ForgotPasswordPage() {
  return (
    <AuthShell
      title="Reset access without the stress."
      description="A straightforward recovery flow for customers who need to get back into their account quickly and securely."
    >
      <Link className="back-link" to="/">← Back to login</Link>
      <span className="eyebrow">Password recovery</span>
      <h2>Reset your password</h2>
      <p className="card-intro">Enter the email or customer ID linked to your bu banking account and we’ll guide you through a secure reset flow.</p>

      <form className="form-grid">
        <div className="field">
          <label htmlFor="recover-identity">Email or customer ID</label>
          <input id="recover-identity" type="text" placeholder="alex@email.com or 12345678" />
        </div>
        <button className="btn btn-primary" type="button">Send recovery link</button>
      </form>

      <div className="support-box">
        <strong>Locked out or noticed suspicious activity?</strong>
        Show support options, device verification, or fraud-call actions here in the real product flow.
      </div>

      <footer className="site-footer" aria-label="Footer links">
        <span>© 2026 bu banking</span>
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Security</a>
          <a href="#">Accessibility</a>
          <a href="#">Help</a>
          <a href="#">Terms</a>
        </div>
      </footer>
    </AuthShell>
  )
}
