import React from "react";
//import '../styles/login.css'
import studentimg from "../assets/student.png";
import parentimg from "../assets/parents.png";
import wardenimg from "../assets/warden.png"

function Login(props) {
  return (
    <main className="bg-white flex flex-col justify-center items-center pr-1.5">
      <header className="self-center flex w-full max-w-[1132px] flex-col mt-28 mb-2 max-md:max-w-full max-md:mt-10">
      <h1 className="text-black text-8xl max-w-[753px] max-md:max-w-full max-md:text-4xl mx-auto flex justify-center items-center">
        Quality Forum
      </h1>

      </header>
      <section className="w-[775px] max-w-full mt-32 max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col mt-1.5 max-md:mt-10">
              <img
                loading="lazy"
                src={studentimg}

                alt="Student"
              />
              <h2 className="text-black text-3xl self-stretch mt-6">
                Login As Student
              </h2>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[34%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col mt-1.5 max-md:mt-10">
              <img
                loading="lazy"
                src={parentimg}
                alt="Parents"
              />
              <h2 className="text-black text-3xl mt-6">Login As Parents</h2>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col max-md:mt-10">
              <img
                loading="lazy"
                src={wardenimg}
                alt="Warden"
              />
              <h2 className="text-black text-3xl mt-7">Login As Warden</h2>
            </div>
          </div>
        </div>
      </section>

      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a8876821-c3f5-4d61-bffd-f83bf36eb412?apiKey=64883608ff2a440e8750635888aa042e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8876821-c3f5-4d61-bffd-f83bf36eb412?apiKey=64883608ff2a440e8750635888aa042e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8876821-c3f5-4d61-bffd-f83bf36eb412?apiKey=64883608ff2a440e8750635888aa042e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8876821-c3f5-4d61-bffd-f83bf36eb412?apiKey=64883608ff2a440e8750635888aa042e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8876821-c3f5-4d61-bffd-f83bf36eb412?apiKey=64883608ff2a440e8750635888aa042e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8876821-c3f5-4d61-bffd-f83bf36eb412?apiKey=64883608ff2a440e8750635888aa042e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8876821-c3f5-4d61-bffd-f83bf36eb412?apiKey=64883608ff2a440e8750635888aa042e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8876821-c3f5-4d61-bffd-f83bf36eb412?apiKey=64883608ff2a440e8750635888aa042e&"className="aspect-[1.61] object-cover object-center w-[558px] overflow-hidden max-w-full grow mt-12 max-md:mt-10"
        alt="Forum"
      />
    </main>
  );
}

export default Login;