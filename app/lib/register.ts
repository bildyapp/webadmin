'use server';
import type { User } from '@/app/lib/definitions';
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'


async function createUser(formData: FormData): Promise<User | undefined> {
  try {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/api/user/register`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ "email": formData.get("email"), "password": formData.get("password") })
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

export async function register(
  prevState: string | undefined,
  formData: FormData,
): Promise<any> {
  try {
    const user = await createUser(formData);
    console.log(user)
    if (user && user.token) {
      cookies().set({
        name: 'bytoken',
        value: user.token,
        path: '/',
      });
      redirect('/verification');
    }
    return null;
  } catch (error) {
        throw error;
  }
}