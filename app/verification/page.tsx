'use client'
import VerificationPopup from '@/app/ui/verificationPopup';
import { useState } from 'react';
import { verify } from '@/app/lib/verify';

const Verify: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(true);
  const [verificationCode, setVerificationCode] = useState<string>('');

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);



  const handleCodeSubmit = (code: string) => {
    setVerificationCode(code);
    //console.log('Verification code:', code);
    verify(code)
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb- text-center">Crea tu cuenta de Bildy</h1>
      <VerificationPopup isOpen={isPopupOpen} onRequestClose={closePopup} onCodeSubmit={handleCodeSubmit} />
    </div>
  );
};

export default Verify;