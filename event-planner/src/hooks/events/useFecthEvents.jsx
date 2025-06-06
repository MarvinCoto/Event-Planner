import { url } from "../../utils/apiUrl"
import { useEffect, useState } from "react"
import { toast } from "react-hot-toast"

const useFetchEvents = () => {

    const [events, setEvents] = useState([]); 

    const getEvents = async () => {

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Error fetching events");
            }
            const data = await response.json();
            setEvents(data);
            
        } catch (error) {
            console.error("Error fetching events: ", error);
            toast.error("Error fetching events");
        }
    }

    //funcion para obtener un usuario por su id
  //se usa async/await para manejar la asincronía de la llamada a la API
 
  const getEventById = async (id) => {
    try {
      const response = await fetch(`${url}/${id}`);
      if (!response.ok) {
        console.log("Failed to fetch event");
        throw new Error("Failed to fetch event");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching event:", error);
      console.log("Failed to fetch event");
      return null;
    }
  };

    useEffect(() => {
        getEvents();
    }, []);

    return {
        events,
        getEventById,
        getEvents
    }
}

export default useFetchEvents;