import "./user.css";
export function User({ user }) {
  return (
    <div className="user">
      <div className="name">
        <span>👤</span>
        <div>{user.name}</div>
      </div>
      <span>{user.selected ? "✅" : "❌"}</span>
    </div>
  );
}
