import { useState } from "react";
export default function form() {
  const [user, setUser] = useState({ name: "", email: "", phone: "" });
  const saveUser = (e) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <form onSubmit={saveUser}>
      Name :
      <input
        type="text"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <br />
      Email :
      <input
        type="text"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <br />
      Phone :
      <input
        type="text"
        value={user.phone}
        onChange={(e) => setUser({ ...user, phone: e.target.value })}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
