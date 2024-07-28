import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import type { User } from '@/app/lib/definitions';
import { cookies } from 'next/headers'


async function getUser(email: string, password: string): Promise<User | undefined> {
  try {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/api/user/login`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password })
    });
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    const data = await response.json();
    return (data);
  } catch (error) {
    console.error('Failed to fetch user:', error)
    throw new Error('Failed to fetch user.')
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          let usr;
          let token;
          if (password.length < 100) {
            const user = await getUser(email, password);
            if (user) {
              token = user.token;
              usr = user.user;
            }
          } else {
            token = password
            usr = { email }
          }
          if (usr && token) {
            cookies().set({
              name: 'bytoken',
              value: token,
              path: '/',
            });
            return usr;
          }
        }
        console.log('Invalid credentials')
        return null;
      },
    }),
  ],
});