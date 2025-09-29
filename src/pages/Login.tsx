import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useLocation } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPwd, setShowPwd] = useState(false);
  const loc = useLocation();
  const registered = new URLSearchParams(loc.search).get("registered");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await login({ email, password });
    } catch (err: any) {
      setError(err?.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto mt-20 max-w-md">
      <div className="card">
        <h1 className="arcade-title mb-3 text-lg">Player Login</h1>
        {registered && (
          <div className="badge mb-3">
            <span className="dot"></span>Registration successful. Please login.
          </div>
        )}
        {error && (
          <div className="badge mb-3 border-red-700">
            <span className="dot bg-red-500"></span>
            {error}
          </div>
        )}
        <form className="space-y-3" onSubmit={onSubmit}>
          <div>
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              className="input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              inputMode="email"
              spellCheck={false}
              autoCapitalize="off"
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
              title="Enter a valid email address (e.g. user@example.com)"
            />
          </div>

          <div>
            <label className="label" htmlFor="password">
              Password
            </label>

            <div className="relative">
              <input
                id="password"
                name="password"
                className="input pr-10"
                type={showPwd ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={8}
                maxLength={128}
                pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}"
                title="At least 8 characters, with upper & lower case letters and a number"
                autoComplete="current-password"
                aria-label="Password"
              />

              <button
                type="button"
                onClick={() => setShowPwd((v) => !v)}
                aria-label={showPwd ? "Hide password" : "Show password"}
                aria-pressed={showPwd}
                className="absolute inset-y-0 right-2 my-auto h-8 px-2 rounded-md text-xs font-semibold
                   bg-gradient-to-b from-slate-700 to-slate-800 text-slate-100"
              >
                {showPwd ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <button className="btn-arcade" disabled={loading}>
            {loading ? "Loading..." : "Enter Game"}
          </button>
        </form>
      </div>
    </div>
  );
}
