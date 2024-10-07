import Cards from "../components/Cards";
import { FaLocationArrow } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Project() {
  const navigate = useNavigate();
  return (
    <div className="mb-24 h-auto w-full sm:mb-0 md:h-screen">
      <div>
        <p className="font-poppins mx-auto w-[50%] pb-10 pt-8 text-center text-2xl tracking-wider text-gray-900 lg:text-3xl">
          Projetos
        </p>
      </div>
      <div className="mx-auto mb-2 grid w-[90%] grid-cols-1 gap-4 sm:mb-8 md:grid-cols-2">
        <Cards />
      </div>
      <div className="mx-auto w-[90%]">
        <div className="flex cursor-pointer items-center gap-2 font-semibold leading-tight text-gray-900">
          <span
            className="font-poppins group relative"
            onClick={() => {
              navigate("/listadeprojetos");
            }}
          >
            
            <span className="absolute bottom-0 left-0 top-6 h-[2px] w-full bg-gray-900 opacity-0 transition-opacity group-hover:opacity-100"></span>
          </span>
          <FaLocationArrow />
        </div>
      </div>
    </div>
  );
}

export default Project;