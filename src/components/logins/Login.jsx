import React from "react";
import studentimg from "../../assets/student.png";
import parentimg from "../../assets/parents.png";
import wardenimg from "../../assets/warden.png"
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function Login(props) {
  return (
    <>
    <main className="bg-gradient-to-b from-cyan-500 to-white h-full w-full flex flex-col justify-center items-center pr-1.5">
      <header className="self-center flex w-full max-w-[1132px] flex-col mt-28 mb-2 max-md:max-w-full max-md:mt-10">
      <h1 className="text-black text-6xl max-w-[753px] max-md:max-w-full max-md:text-6xl mx-auto flex justify-center items-center">
        Quality Forum
      </h1>
      </header>
      <section className=" flex max-w-full mt-32 max-md:mt-10 md:justify-center text-center">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col mt-0 max-md:mt-10">
              <img
                loading="lazy"
                src={studentimg}
                alt="Student"
                className="pb-10 block w-40 h-auto mx-auto "
              />
              <Link to="/studentlogin">
              <Button className="text-black text-6xl mt-8 max-md:text-2xl sm:text-center" variant="contained">
                Login As Student
              </Button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-stretch max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col mt-0 max-md:mt-10">
              <img
                loading="lazy"
                src={parentimg}
                alt="Parents"
                className="pb-10 block w-40 h-auto mx-auto"

              />
              <Link to="/parentslogin">
                <Button className="text-black text-6xl mt-8 max-md:text-2xl sm:text-center" variant="contained">
                Login As Parents
                </Button>
              </Link>
              </div>
          </div>
          <div className="flex flex-col items-stretch max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col mt-0 max-md:mt-10">
              <img
                loading="lazy"
                src={wardenimg}
                alt="Warden"
                className="pb-10 block w-40 h-auto mx-auto"
              />
              <Link to="/administrationlogin">
                <Button className="text-black text-6xl mt-8 max-md:text-2xl sm:text-center" variant="contained">
                  Login As Administration
                </Button>
               </Link> 
            </div>
          </div>
        </div>
      </section>
      <div className="mt-auto p-4 text-center pt-24">
        <p className="text-gray-500">
        All rights reserved &copy; Quality Forum
        </p>
      </div>
    </main>
    </>
  );
}

export default Login;