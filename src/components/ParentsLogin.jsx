import React from "react";
import Parentsimg from "../assets/parents.png"
import { TextField, Button, Link } from "@mui/material";

function StudentLogin(props) {
  return (
    <main className="bg-white flex flex-col pl-5 pr-1.5" id="parentslogin">
      <section className="self-center flex w-full max-w-[1101px] flex-col mt-16 mb-2 max-md:max-w-full max-md:mt-10 justify-center items-center">
        <div className="flex max-w-full flex-col">
        <h1 className="text-black text-8xl max-w-[753px] max-md:max-w-full max-md:text-4xl mx-auto flex justify-center items-center">
            Quality Forum
        </h1>
        </div>
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col mt-0 max-md:mt-10">
              <img
                loading="lazy"
                src={Parentsimg}
                alt="Student"
                className="pb-7 pt-10"
              />
            <h2 className="text-black text-3xl self-center ">
                Parents Login
            </h2>
            </div>
          </div>
        </div>
        <div className=" max-w-full mt-7 max-md:mt-0">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[380px]  max-md:w-full max-md:ml-0">
                <form>
                    <div className="flex flex-col">
                    <div className="flex flex-col max-md:mt-10 gap-6 justify-center items-center">
                    <TextField
                    className="rounded border self-stretch flex w-full flex-col pl-4 pr-5 py-4 pt-10 border-solid border-black"
                    id="collegeId"
                    label="College ID"
                    variant="outlined"
                    />
                    <TextField
                    className="rounded border self-stretch flex w-full flex-col mt-7 pl-4 pr-5 py-3 border-solid border-black"
                    id="password"
                    label="Password"
                    type="password"
                    variant="outlined"
                    />
                    <Button
                    type="submit"
                    variant="contained"
                    className="rounded shadow-[0px_4px_4px_0px_rgba(0,0,0,0.30)] bg-sky-700 self-stretch flex w-full flex-col mt-9 px-5 py-6"
                    >
                    Login
                    </Button>
                    </div>
                    <Link href="#" underline="always" className="text-black text-right text-base font-medium mt-10 max-md:mr-px">
                    Forgot password?
                    </Link>
                    <Link
                    href="#"
                    underline="always"
                    className="text-sky-700 text-left text-base font-bold underline max-md:ml-0"
                    >
                    Don't have an account? <span className="font-bold text-orange-500">Sign up</span>
                    </Link>

                </div>
                </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default StudentLogin;