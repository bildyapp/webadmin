import { authenticate } from '@/app/lib/actions';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

export default function GoogleButton() {

    const handleLoginSuccess = async (response: any) => {
        try {
            
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/api/user/google`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token: response.credential }),
            });
            const data = await res.json()

            const formData = new FormData();
            formData.append('email', data.user.email)
            formData.append('password', data.token)

            await authenticate(undefined, formData)

        } catch (error) {
            console.error('Error sending token to backend:', error);
        }
    };

   

    let clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
    if (!clientId) return

    return (
        <GoogleOAuthProvider clientId={clientId}>
            <div className='flex justify-center'>
                <GoogleLogin 
                    onSuccess={handleLoginSuccess} 
                />
            </div>
        </GoogleOAuthProvider>
    );
};

