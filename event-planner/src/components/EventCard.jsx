import React from "react";
import { MapPin, Edit } from "lucide-react";
import Button from "./Button";
import ButtonDelete from "./ButtonDelete";
import { optionSelect } from "../utils/apiUrl";

const getEventTypeColor = (tipoEvento) => {
  const colors = {
    ft: 'bg-pink-100 text-pink-800 border-pink-200',       // Fiesta
    rn: 'bg-indigo-100 text-indigo-800 border-indigo-200', // Reunión
    cf: 'bg-blue-100 text-blue-800 border-blue-200',       // Conferencia
    tl: 'bg-green-100 text-green-800 border-green-200',    // Taller
    ct: 'bg-red-100 text-red-800 border-red-200',          // Concierto
    ep: 'bg-orange-100 text-orange-800 border-orange-200', // Exposición
    fv: 'bg-purple-100 text-purple-800 border-purple-200', // Festival
    dp: 'bg-yellow-100 text-yellow-800 border-yellow-200', // Deportivo
    sb: 'bg-amber-100 text-amber-800 border-amber-200',    // Subasta
    bd: 'bg-rose-100 text-rose-800 border-rose-200',       // Boda
    otro: 'bg-gray-100 text-gray-800 border-gray-200'      // Otro
  };

  return colors[tipoEvento] || 'bg-gray-100 text-gray-800 border-gray-200';
};

const EventCard = ({ event, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
            {event.evento}
          </h3>
          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getEventTypeColor(event.tipoEvento)}`}>
            {optionSelect.find(opt => opt.value === event.tipoEvento)?.label || "Sin asignar"}
          </span>
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex items-center text-gray-600">
            <MapPin className="w-4 h-4 mr-2 text-red-500 flex-shrink-0" />
            <span className="text-sm truncate">{event.direccion}</span>
          </div>
          <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
            {event.descripcion}
          </p>
        </div>

        <div className="flex gap-2">
          <Button
            text={
              <>
                <Edit className="w-4 h-4 mr-2" />
                Editar
              </>
            }
            onClick={() => onEdit(event.id)}
          />
          <ButtonDelete
            text="Eliminar"
            onClick={() => onDelete(event.id)}
          />
        </div>
      </div>
    </div>
  );
};

export default EventCard;