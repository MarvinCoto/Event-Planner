import { Link } from "react-router-dom";
import Titulo from "../components/Titulos";
import InputText from "../components/InputText";
import SelectInput from "../components/SelectInput";
import Button from "../components/Button";
import { optionSelect } from '../utils/apiUrl'
import useDataEvent from '../hooks/events/useDataEvent'
import { useParams } from "react-router-dom";
import {useForm} from "react-hook-form"

const Events = () => {

  const { id } = useParams();
  const methods = useForm();
  const {register, handleSubmit, errors} = useDataEvent(methods);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link
        to="/home"
        className="text-2xl font-bold text-gray-900 mb-4 bg-green-100 p-2 rounded w-auto text-center hover:bg-green-200 transition-colors"
      >
        Back To Dashboard
      </Link>
      <form
      onSubmit={handleSubmit}
      className="border-b border-gray-900/10 pb-12 bg-white shadow-md rounded-lg flex flex-col p-4 ">
        <Titulo titulo="Event Information" />

        <p className="mt-1 text-sm/6 text-gray-600">
          Use a permanent address where you can receive mail.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          {/* First Name */}

          <InputText
            type="text"
            name="evento"
            label="Evento"
            placeholder="Enter the name of the event"
            register={register}
            errors={errors}
          />

          {/* Last Name */}
          <InputText
            type="text"
            name="direccion"
            label="Dirección"
            placeholder="Enter the address of the event"
            register={register}
            errors={errors}
          />

          {/* Email */}
          <InputText
            type="text"
            name="descripcion"
            label="Descripción"
            placeholder="Enter description of the event"
            register={register}
            errors={errors}
          />

          {/* Country */}
          <SelectInput
            label="Tipo de evento"
            options={optionSelect}
            name="tipoEvento"
            register={register}
            errors={errors}
          />
        </div>
        <Button type="submit" text="Save Event"/>
      </form>
    </div>
  );
};

export default Events;