/*
import {
  CustomerField,
  CustomersTableType,
  InvoiceForm,
  InvoicesTable,
  LatestInvoiceRaw,
  User,
  Customer,
  Project,
  Revenue,
} from './definitions';
import { formatCurrency } from './utils';
*/
import { cookies } from 'next/headers';

/*
export async function getUser(email: string) {
  try {
    const user = await sql`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0] as User;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}
*/

const getToken = () => {
  const cookieStore = cookies()
  return cookieStore.get('bytoken')
}

export async function fetchClients() {
  try {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/api/client`
    const token = getToken();
    if (!token || !token.value) {
      console.error("Token no disponible");
      return;
    }
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token.value}`
      }
    })
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    const data = await response.json();

    return data;

  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch clients data.');
  }
}

export async function fetchClient(id: String) {
  try {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/api/client/${id}`
    const token = getToken();
    if (!token || !token.value) {
      console.error("Token no disponible");
      return;
    }
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token.value}`
      }
    })
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch client data.');
  }
}

export async function fetchProjects() {
  try {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/api/project`
    const token = getToken();
    if (!token || !token.value) {
      console.error("Token no disponible");
      return;
    }
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token.value}`
      }
    })
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    const data = await response.json();

    return data;

  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch projects data.');
  }
}

export async function fetchProject(id: String) {
  try {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/api/project/${id}`
    const token = getToken();
    if (!token || !token.value) {
      console.error("Token no disponible");
      return;
    }
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token.value}`
      }
    })
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch project data.');
  }
}

export async function fetchDeliveryNotes() {
  try {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/api/deliverynote`
    const token = getToken();
    if (!token || !token.value) {
      console.error("Token no disponible");
      return;
    }
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token.value}`
      }
    })
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    const data = await response.json();

    return data;

  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch delivery notes data.');
  }
}

export async function fetchDeliveryNote(id: String) {
  try {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/api/deliverynote/${id}`
    const token = getToken();
    if (!token || !token.value) {
      console.error("Token no disponible");
      return;
    }
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token.value}`
      }
    })
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch delivery note data.');
  }
}

