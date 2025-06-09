import React from 'react';
import { Edit } from 'lucide-react';

// Componente Button (Azul)
const Button = ({ type, onClick, text }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-blue-100 hover:bg-blue-200 text-blue-600 font-semibold py-2 px-4 rounded transition-colors flex items-center"
    >
      
      {text}
    </button>
  );
};

export default Button;