// components/VerificationPopup.tsx
import React, { useState } from 'react';
import Modal from 'react-modal';

//Modal.setAppElement('#__next'); // Esto es necesario para accesibilidad

interface VerificationPopupProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onCodeSubmit: (code: string) => void;
}

const VerificationPopup: React.FC<VerificationPopupProps> = ({ isOpen, onRequestClose, onCodeSubmit }) => {
  const [code, setCode] = useState<string[]>(['', '', '', '', '', '']);

  const handleChange = (index: number, value: string) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
  };

  const handleSubmit = () => {
    const codeString = code.join('');
    onCodeSubmit(codeString);
    onRequestClose();
  };


  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto my-10"
      overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center"
    >
      <div className="text-center">
        <h2 className="text-xl font-bold mb-4">Introduzca el código de verificación</h2>
        <p className="mb-4">Acabamos de enviar el código de verificación a tu email.</p>
        <div className="flex justify-center space-x-2 mb-4">
          {code.map((digit, idx) => (
            <input
              key={idx}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(idx, e.target.value)}
              className="w-12 h-12 text-center text-lg border border-gray-300 rounded-lg"
            />
          ))}
        </div>
        <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded-lg">Verificar</button>
      </div>
    </Modal>
  );
};

export default VerificationPopup;
