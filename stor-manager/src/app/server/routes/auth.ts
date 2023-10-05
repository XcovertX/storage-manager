import { Router } from 'express';
import { signOut, signIn } from 'next-auth/react';

const authRouter = Router();

// Login route
authRouter.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Implement your login logic here, e.g., verify credentials
  if (email && password) {
    // Assuming login is successful, you can create a session here
    // Then, use NextAuth.js's `signIn` function to set the user session
    const user = { email }; // Replace with your user data
    await signIn('credentials', { redirect: false, user });
    return res.status(200).json({ message: 'Login successful' });
  } else {
    return res.status(401).json({ message: 'Login failed' });
  }
});

// Logout route
authRouter.post('/logout', async (req, res) => {
  // Call the `signOut` function to log the user out
  await signOut({ redirect: false });
  res.status(200).json({ message: 'Logout successful' });
});

export default authRouter;
