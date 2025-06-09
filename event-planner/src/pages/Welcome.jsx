import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import SubTitulo from "../components/SubTitulo";
import { Calendar, MapPin, Users, Plus, Edit2, Trash2, ArrowLeft, Save, Star, Clock, Tag } from 'lucide-react';

const Welcome = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const navigate = useNavigate();

  const handleAccept = () => {
    setShowWelcome(false);
    navigate("/home");
  };

  if (!showWelcome) return null;

  return (
<div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 flex items-center justify-center p-4">
      <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 max-w-md w-full text-center transform hover:scale-105 transition-all duration-300">
        <div className="mb-6">
          <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Calendar className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Event Planner</h1>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </div>
        
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Planifica y gestiona eventos extraordinarios con nuestra plataforma profesional
        </p>
        
        <div className="space-y-4 mb-8">
        <div className="flex items-center">
        <Star className="w-5 h-5 text-yellow-500 mr-2" />
        <span className="text-sm">Gestión completa de eventos</span>
        </div>
        <div className="flex items-center">
        <Calendar className="w-5 h-5 text-blue-500 mr-2" />
        <span className="text-sm">Planificación profesional</span>
        </div>
        <div className="flex items-center">
        <MapPin className="w-5 h-5 text-red-500 mr-2" />
        <span className="text-sm">Ubicaciones detalladas</span>
        </div>
        </div>
        
        <button
          onClick={handleAccept}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-4 px-6 rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-lg"
        >
          Comenzar a Planificar
        </button>
      </div>
    </div>
  );
};

export default Welcome;