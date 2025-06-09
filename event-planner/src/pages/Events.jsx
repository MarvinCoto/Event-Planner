import React from "react"
import { Link } from "react-router-dom"; 
import Titulo from "../components/Titulos";
import InputText from "../components/InputText";
import SelectInput from "../components/SelectInput";
import Button from "../components/Button";
import { optionSelect } from '../utils/apiUrl';
import useDataEvent from '../hooks/events/useDataEvent';
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Calendar, ArrowLeft, Save, Sparkles } from 'lucide-react';
import toast from 'react-hot-toast';

const Events = () => {
  const { id } = useParams();
  const methods = useForm();
  const { register, handleSubmit, errors } = useDataEvent(methods);

  // Función para manejar el submit con validaciones
  const onSubmit = (data) => {
    // Validar campos requeridos
    if (!data.evento || data.evento.trim() === '') {
      toast.error('El nombre del evento es requerido');
      return;
    }

    if (!data.direccion || data.direccion.trim() === '') {
      toast.error('La dirección es requerida');
      return;
    }

    if (!data.descripcion || data.descripcion.trim() === '') {
      toast.error('La descripción es requerida');
      return;
    }

    if (!data.tipoEvento || data.tipoEvento === '') {
      toast.error('Debe seleccionar un tipo de evento');
      return;
    }

    
    
    // Llamar al handleSubmit original
    handleSubmit(data);
  };

  // Mostrar alertas para errores específicos de react-hook-form
  const showFieldErrors = () => {
    if (errors.evento) {
      toast.error('Error en el campo Evento: ' + errors.evento.message);
    }
    if (errors.direccion) {
      toast.error('Error en el campo Dirección: ' + errors.direccion.message);
    }
    if (errors.descripcion) {
      toast.error('Error en el campo Descripción: ' + errors.descripcion.message);
    }
    if (errors.tipoEvento) {
      toast.error('Error en el campo Tipo de Evento: ' + errors.tipoEvento.message);
    }
  };

  // Llamar a showFieldErrors cuando hay errores
  React.useEffect(() => {
    if (Object.keys(errors).length > 0) {
      showFieldErrors();
    }
  }, [errors]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header moderno */}
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center">
            <Link
              to="/home"
              className="flex items-center text-gray-600 hover:text-purple-600 transition-colors mr-6 group"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Volver al inicio</span>
            </Link>
            
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-xl mr-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  {id ? 'Editar Evento' : 'Crear Nuevo Evento'}
                </h1>
                <p className="text-gray-600">Complete la información del evento</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          {/* Header del formulario */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-6">
            <div className="flex items-center text-white">
              <Sparkles className="w-6 h-6 mr-3" />
              <div>
                <Titulo titulo="Información del evento" />
                <p className="mt-1 text-purple-100 opacity-90">
                  Completa todos los campos para registrar el evetno
                </p>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const data = Object.fromEntries(formData);
              onSubmit(data);
            }}
            className="p-8 space-y-8"
          >
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              {/* Nombre del evento */}
              <div className="sm:col-span-6">
                <div className="relative">
                  <InputText
                    type="text"
                    name="evento"
                    label="Evento"
                    placeholder="Ingrese el nombre del evento"
                    register={register}
                    errors={errors}
                  />
                </div>
              </div>

              {/* Dirección */}
              <div className="sm:col-span-6">
                <InputText
                  type="text"
                  name="direccion"
                  label="Dirección"
                  placeholder="Ingrese la dirección del evento"
                  register={register}
                  errors={errors}
                />
              </div>

              {/* Descripción */}
              <div className="sm:col-span-6">
                <InputText
                  type="text"
                  name="descripcion"
                  label="Descripción"
                  placeholder="Ingrese la descripción del evento"
                  register={register}
                  errors={errors}
                />
              </div>

              {/* Tipo de evento */}
              <div className="sm:col-span-6">
                <SelectInput
                  label="Tipo de evento"
                  options={optionSelect}
                  name="tipoEvento"
                  register={register}
                  errors={errors}
                />
              </div>
            </div>

            {/* Botón de envío mejorado */}
            <div className="flex justify-end pt-6 border-t border-gray-200">
              <div className="relative">
                <Button type="submit" text={
                  <div className="flex items-center">
                    <Save className="w-4 h-4 mr-2" />
                    {id ? 'Actualizar Evento' : 'Guardar evento'}
                  </div>
                } />
                {/* Efecto de brillo */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none"></div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Events;