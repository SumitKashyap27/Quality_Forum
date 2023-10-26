import React from "react";

function StudentLogin(props) {
  return (
    <main className="bg-white flex flex-col pl-5 pr-1.5" id="studentlogin">
      <section className="self-center flex w-full max-w-[1101px] flex-col mt-28 mb-2 max-md:max-w-full max-md:mt-10">
        <header className="flex w-[681px] max-w-full flex-col">
          <h1 className="text-black text-8xl self-stretch max-md:max-w-full max-md:text-4xl">
            Quality Forum
          </h1>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/657246e3-74bd-4024-89cb-e8f1a67a1300?apiKey=64883608ff2a440e8750635888aa042e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/657246e3-74bd-4024-89cb-e8f1a67a1300?apiKey=64883608ff2a440e8750635888aa042e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/657246e3-74bd-4024-89cb-e8f1a67a1300?apiKey=64883608ff2a440e8750635888aa042e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/657246e3-74bd-4024-89cb-e8f1a67a1300?apiKey=64883608ff2a440e8750635888aa042e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/657246e3-74bd-4024-89cb-e8f1a67a1300?apiKey=64883608ff2a440e8750635888aa042e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/657246e3-74bd-4024-89cb-e8f1a67a1300?apiKey=64883608ff2a440e8750635888aa042e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/657246e3-74bd-4024-89cb-e8f1a67a1300?apiKey=64883608ff2a440e8750635888aa042e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/657246e3-74bd-4024-89cb-e8f1a67a1300?apiKey=64883608ff2a440e8750635888aa042e&"className="aspect-square object-cover object-center w-[193px] overflow-hidden self-center max-w-full ml-6 mt-10 max-md:mt-10"
            alt="Quality Forum Logo"
          />
          <h2 className="text-black text-3xl self-center w-[246px] ml-5 mt-5">
            Login As Parents
          </h2>
        </header>
        <div className="w-[912px] max-w-full mt-14 max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[48%] max-md:w-full max-md:ml-0">
              <form>
                <div className="flex flex-col w-[386px] max-md:mt-10">
                  <div className="rounded border self-stretch flex w-full flex-col pl-4 pr-5 py-4 border-solid border-black">
                    <div className="flex w-[148px] max-w-full items-start justify-between gap-5">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/dd29f589-effd-4fdd-8708-46eb098e30da?apiKey=64883608ff2a440e8750635888aa042e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd29f589-effd-4fdd-8708-46eb098e30da?apiKey=64883608ff2a440e8750635888aa042e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd29f589-effd-4fdd-8708-46eb098e30da?apiKey=64883608ff2a440e8750635888aa042e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd29f589-effd-4fdd-8708-46eb098e30da?apiKey=64883608ff2a440e8750635888aa042e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd29f589-effd-4fdd-8708-46eb098e30da?apiKey=64883608ff2a440e8750635888aa042e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd29f589-effd-4fdd-8708-46eb098e30da?apiKey=64883608ff2a440e8750635888aa042e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd29f589-effd-4fdd-8708-46eb098e30da?apiKey=64883608ff2a440e8750635888aa042e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd29f589-effd-4fdd-8708-46eb098e30da?apiKey=64883608ff2a440e8750635888aa042e&"className="aspect-[0.96] object-cover object-center w-[26px] overflow-hidden self-stretch max-w-full"
                        alt="College ID Icon"
                      />
                      <div className="text-black text-center text-sm font-light leading-[142.857%] uppercase my-auto">
                        College ID
                      </div>
                    </div>
                  </div>
                  <div className="rounded border self-stretch flex w-full flex-col mt-7 pl-4 pr-5 py-4 border-solid border-black">
                    <div className="flex w-[147px] max-w-full items-start justify-between gap-5">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a867e704-de77-4d25-9a0d-fefdebc9941e?apiKey=64883608ff2a440e8750635888aa042e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a867e704-de77-4d25-9a0d-fefdebc9941e?apiKey=64883608ff2a440e8750635888aa042e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a867e704-de77-4d25-9a0d-fefdebc9941e?apiKey=64883608ff2a440e8750635888aa042e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a867e704-de77-4d25-9a0d-fefdebc9941e?apiKey=64883608ff2a440e8750635888aa042e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a867e704-de77-4d25-9a0d-fefdebc9941e?apiKey=64883608ff2a440e8750635888aa042e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a867e704-de77-4d25-9a0d-fefdebc9941e?apiKey=64883608ff2a440e8750635888aa042e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a867e704-de77-4d25-9a0d-fefdebc9941e?apiKey=64883608ff2a440e8750635888aa042e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a867e704-de77-4d25-9a0d-fefdebc9941e?apiKey=64883608ff2a440e8750635888aa042e&"className="aspect-square object-cover object-center w-[26px] overflow-hidden self-stretch max-w-full"
                        alt="Password Icon"
                      />
                      <div className="text-black text-center text-sm font-light leading-[142.857%] uppercase my-auto">
                        Password
                      </div>
                    </div>
                  </div>
                  <div className="rounded shadow-[0px_4px_4px_0px_rgba(0,0,0,0.30)] bg-sky-700 self-stretch flex w-full flex-col mt-9 px-5 py-6">
                    <button className="text-white text-center text-xl font-semibold leading-[95.238%] uppercase self-center">
                      Login
                    </button>
                  </div>
                  <div className="text-black text-center text-base font-medium mt-7 max-md:mr-px">
                    <a href="#" className="text-black">
                      Forgot password?
                    </a>
                  </div>
                  <div className="text-sky-700 text-right text-base font-bold underline mt-2.5 max-md:ml-0.5">
                    <span className="text-black">Don't have an account? </span>
                    <span className="font-bold text-orange-500"></span>
                    <a href="#" className="font-bold text-sky-700">
                      Sign up
                    </a>
                  </div>
                </div>
              </form>
            </div>
            <div className="flex flex-col items-stretch w-[52%] ml-5 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8c57332c-d6cd-49c5-82bc-23c9a940e7bb?apiKey=64883608ff2a440e8750635888aa042e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c57332c-d6cd-49c5-82bc-23c9a940e7bb?apiKey=64883608ff2a440e8750635888aa042e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c57332c-d6cd-49c5-82bc-23c9a940e7bb?apiKey=64883608ff2a440e8750635888aa042e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c57332c-d6cd-49c5-82bc-23c9a940e7bb?apiKey=64883608ff2a440e8750635888aa042e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c57332c-d6cd-49c5-82bc-23c9a940e7bb?apiKey=64883608ff2a440e8750635888aa042e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c57332c-d6cd-49c5-82bc-23c9a940e7bb?apiKey=64883608ff2a440e8750635888aa042e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c57332c-d6cd-49c5-82bc-23c9a940e7bb?apiKey=64883608ff2a440e8750635888aa042e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c57332c-d6cd-49c5-82bc-23c9a940e7bb?apiKey=64883608ff2a440e8750635888aa042e&"className="aspect-[1.83] object-cover object-center w-full overflow-hidden grow mt-48 max-md:max-w-full max-md:mt-10"
                alt="Login"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default StudentLogin;