import React from 'react';
import { Trash2 } from 'lucide-react';

const ButtonDelete = ({ type, onClick, text }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-red-100 hover:bg-red-200 text-red-600 font-semibold py-2 px-4 rounded transition-colors flex items-center"
    >
      <Trash2 className="w-4 h-4 mr-2" />
      {text}
    </button>
  );
};
  
export default ButtonDelete;