import React from 'react';
export default function Login() {
  return (
    <div className="login">
      <h1>Please Login</h1>
      <form>
        <label>e-mail</label>
        <input type="text" name="email" placeholder="e-mail" />

        <label> passwd </label>
        <input type="password" name="passwd" placeholder="password" />

        <button>Login</button>
      </form>
    </div>
  );
}
