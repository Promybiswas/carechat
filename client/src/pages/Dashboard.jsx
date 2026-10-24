import { useAuth } from "../context/AuthContext.jsx";

export default function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="page">
      <header className="topbar">
        <strong>CareChat</strong>
        <button onClick={logout}>Sign out</button>
      </header>
      <h1>Hello, {user.name}</h1>
      <p className="muted">Signed in as {user.email}</p>
      <div className="note">
        Not medical advice. Reports, chat, and health metrics arrive in Phases 5–8.
      </div>
    </div>
  );
}