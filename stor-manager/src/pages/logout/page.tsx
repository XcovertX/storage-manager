import { signOut } from 'next-auth/react';

function LogoutPage() {
  const handleLogout = async () => {
    // Call the signOut function from NextAuth.js
    await signOut({ redirect: false });

    // Redirect the user to the home page or another page upon successful logout
    window.location.href = '/';
  };

  return (
    <div>
      <h1>Logout</h1>
      <p>Are you sure you want to log out?</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default LogoutPage;
