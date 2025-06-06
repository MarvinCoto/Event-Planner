import { url } from "../../utils/apiUrl";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
 
const useEventAction = (getEvents) => {
  const navigate = useNavigate();
 
  //funcion para eliminar un usuario por su id
  // se usa async/await para manejar la asincronía de la llamada a la API
  const deleteEvent = async (id) => {
    try {
      const response = await fetch(`${url}/${id}`, {
        method: "DELETE",
      });
      toast.success("Event deleted successfully");
      console.log("Event deleted:", response);
      getEvents();
    } catch (error) {
      console.error("Error deleting event:", error);
      toast.error("Failed to delete event");
    } finally {
      getEvents();
    }
  };
 
  // Función para manejar la actualización de un usuario
  // Esta función se llama cuando se hace clic en el botón de editar
  // y redirige al usuario a la página de edición del usuario
  // pasando el id del usuario como parámetro en la URL
  const handleUpdateEvent = (id) => {
    navigate(`/events/${id}`);
  };
 
  return {
    deleteEvent,
    handleUpdateEvent,
  };
};
 
export default useEventAction;