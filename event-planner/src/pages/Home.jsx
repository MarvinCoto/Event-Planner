import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Titulo from "../components/Titulos";
import Button from "../components/Button";
import ButtonDelete from "../components/ButtonDelete";
import useFetchEvents from "../hooks/events/useFecthEvents";
import { optionSelect } from "../utils/apiUrl";
import useEventActions from "../hooks/events/useEventActions";
import { Calendar, MapPin, Plus, Search, Filter, BarChart3, Edit } from 'lucide-react';
import Swal from 'sweetalert2';
import EventCard from "../components/EventCard";

const Home = () => {
  const { events, getEvents } = useFetchEvents();
  const { deleteEvent, handleUpdateEvent } = useEventActions(getEvents);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const filteredEvents = events?.filter(event => {
    const evento = event.evento?.toLowerCase() || '';
    const descripcion = event.descripcion?.toLowerCase() || '';
    const search = searchTerm.toLowerCase();

    const matchesSearch = evento.includes(search) || descripcion.includes(search);
    const matchesFilter = filterType === 'all' || event.tipoEvento === filterType;

    return matchesSearch && matchesFilter;
  }) || [];

    const deleteEventConfirmation = async (eventId) => {
    const result = await Swal.fire({
      title: '¿Estás seguro?',
      text: "No podrás revertir esta acción",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ef4444',
      cancelButtonColor: '#6b7280',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    });

    if (result.isConfirmed) {
      // Llama a la función original del hook
      await deleteEvent(eventId);
      
      // Opcional: mostrar alerta de éxito
      Swal.fire({
        title: '¡Eliminado!',
        text: 'El evento ha sido eliminado correctamente.',
        icon: 'success',
        confirmButtonColor: '#10b981',
        timer: 2000,
        showConfirmButton: false
      });
    }
  };

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header moderno */}
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-xl mr-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Event Planner
                </h1>
                <p className="text-gray-600">Panel de Control de Eventos</p>
              </div>
            </div>
            
            <Link
              to="/events"
              className="flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Plus className="w-5 h-5 mr-2" />
              Agregar evento
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-3 rounded-xl">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Eventos</p>
                <p className="text-2xl font-bold text-gray-900">{events?.length || 0}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-xl">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Eventos Activos</p>
                <p className="text-2xl font-bold text-gray-900">{filteredEvents.length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-3 rounded-xl">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Ubicaciones</p>
                <p className="text-2xl font-bold text-gray-900">{new Set(events?.map(e => e.direccion)).size || 0}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Título original */}
        <div className="mb-6">
          <Titulo titulo="Información de eventos" />
          <p className="mt-1 text-sm text-gray-600">
            Lista de eventos registrados.
          </p>
        </div>

        {/* Filtros y búsqueda */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8 border border-gray-100">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar eventos por nombre o descripción..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="pl-10 pr-8 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none bg-white min-w-[200px]"
              >
                <option value="all">Todos los tipos</option>
                {optionSelect.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Grid de eventos mejorado */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
          <EventCard
          key={event.id}
          event={event}
          onEdit={handleUpdateEvent}
          onDelete={deleteEventConfirmation}
         />
        ))}
        </div>
        ) : (
          <div className="text-center py-16">
            <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No hay eventos</h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              {searchTerm || filterType !== 'all' 
                ? 'No se encontraron eventos que coincidan con tu búsqueda. Intenta cambiar los filtros.'
                : 'Aún no has creado ningún evento. ¡Comienza creando tu primer evento!'
              }
            </p>
            <Link
              to="/events"
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <Plus className="w-5 h-5 mr-2" />
              Crear primer evento
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;