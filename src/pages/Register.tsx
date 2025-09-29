import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const { register } = useAuth();
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPwd, setShowPwd] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setOk(null);
    setLoading(true);
    try {
      const res = await register({ email, displayName, password });
      setOk("Registered! You can now login.");
    } catch (err: any) {
      setError(err?.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto mt-10 max-w-md">
      <div className="card">
        <h1 className="arcade-title mb-3 text-lg">Create Player</h1>
        {error && (
          <div className="badge mb-3 border-red-700">
            <span className="dot bg-red-500"></span>
            {error}
          </div>
        )}
        {ok && (
          <div className="badge mb-3">
            <span className="dot"></span>
            {ok}
          </div>
        )}
        <form className="space-y-3" onSubmit={onSubmit}>
          <div>
            <label className="label" htmlFor="displayName">
              Display Name
            </label>
            <input
              id="displayName"
              name="displayName"
              className="input"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              required
              autoComplete="nickname"
              // 2–32 chars; letters, numbers, spaces, _ and -
              pattern="^[A-Za-z0-9 _-]{2,32}$"
              title="2–32 characters. Letters, numbers, spaces, underscores, and hyphens only."
            />
          </div>

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
                autoComplete="new-password"
                minLength={8}
                maxLength={128}
                // At least 8 chars, 1 lowercase, 1 uppercase, 1 digit
                pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}"
                title="At least 8 characters, including upper & lower case letters and a number."
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
            {loading ? "Creating..." : "Create Account"}
          </button>
        </form>
      </div>
    </div>
  );
}
