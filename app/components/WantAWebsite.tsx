import { ArtOne } from "public/ArtOne";
import { NavLink } from "@remix-run/react";

export const WantAWebsite = () => {
  return (
    <div className="sticky top-0 bg-primary h-screen text-white flex justify-center items-center flex-col gap-2">
      <div className="test text-2xl">Be an artist</div>
      <NavLink to="/getawebsite">
        <button className="border-2 border-white py-2 px-4 rounded-full font-bold bg-white text-primary hover:bg-transparent hover:text-white duration-300">
          Get a 3D website
        </button>
      </NavLink>

      <div className="absolute bottom-0 left-0 ">
        <ArtOne />
      </div>
    </div>
  );
};
