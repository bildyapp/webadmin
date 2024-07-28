'use server';
import type { Acknowledged } from '@/app/lib/definitions';
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const getToken = () => {
    const cookieStore = cookies()
    return cookieStore.get('bytoken')
}

async function verifyUser(code: String): Promise<Acknowledged | undefined> {
    try {
        const url = `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/api/user/validation`;
        const token = getToken();
        if (!token || !token.value) {
            console.error("Token no disponible");
            return;
        }
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token.value}`
            },
            body: JSON.stringify({ "code": code })
        });
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        return (data);
    } catch (error) {
        console.error('Failed to validate code:', error)
        throw new Error('Failed to validate code.')
    }
}

export async function verify(code: String) {
    try {
        const ack = await verifyUser(code);
        console.log(ack)
        if (ack) {
            redirect('/login');
        }
        return null;
    } catch (error) {
        redirect('/register')
        //throw error;
    }
}