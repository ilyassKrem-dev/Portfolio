import { Link } from "react-router-dom";

const NoPage = () => {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
          <h1 className="font-bold text-7xl font-['Montserrat']">404</h1>
          <p className="my-8 text-2xl text-center md:text-3xl font-['Montserrat']">We couldn't find the page you're looking for.</p>
          <Link to="/Home" className="font-['Montserrat'] font-bold text-base mt-2 border border-black rounded-full p-3 corsor-pointer hover:opacity-70 active:opacity-50">BACK TO HOME</Link>
      </div>
    );
  };
  
  export default NoPage;