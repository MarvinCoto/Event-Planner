import { Link } from "react-router-dom";
import Titulo from "../components/Titulos";
import Button from "../components/Button";
import ButtonDelete from "../components/ButtonDelete";
import useFetchEvents from "../hooks/events/useFecthEvents";
import { optionSelect } from "../utils/apiUrl";
import useEventActions from "../hooks/events/useEventActions"

const Home = () => {

  const {events, getEvents} = useFetchEvents();
  const {deleteEvent, handleUpdateEvent} = useEventActions(getEvents);
  
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link
        to="/users"
        className="text-2xl font-bold text-gray-900 mb-4 bg-green-100 p-2 rounded w-full text-center hover:bg-green-200 transition-colors block mb-6"
      >
        Agregar evento
      </Link>

      <Titulo titulo="Event Information" />

      <p className="mt-1 text-sm text-gray-600 mb-4">
        Lista de eventos registrados.
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead className="bg-gray-100 text-gray-700 text-left text-sm">
            <tr>
              <th className="px-4 py-2 border-b">Nombre</th>
              <th className="px-4 py-2 border-b">Direccion</th>
              <th className="px-4 py-2 border-b">Descripción</th>
              <th className="px-4 py-2 border-b">Tipo de evento</th>
              <th className="px-4 py-2 border-b">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {events?.map((event) => (
              <tr
                key={event.id}
                className="border-b hover:bg-gray-50 transition-colors"
              >
                <td className="px-4 py-2">{event.evento}</td>
                <td className="px-4 py-2">{event.direccion}</td>
                <td className="px-4 py-2">{event.descripcion}</td>
                <td className="px-4 py-2">
                  {optionSelect.find((opt) => opt.value === event.tipoEvento)
                    ?.label || "Sin asignar"}
                </td>
                <td className="px-4 py-2">
                  <Button text="Editar"
                  onClick={() => handleUpdateEvent(event.id)}
                  />

                  <ButtonDelete text="Eliminar"
                  onClick={() => deleteEvent(event.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;