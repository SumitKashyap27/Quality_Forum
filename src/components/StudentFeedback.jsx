import React from 'react'
import internetsy from "../assets/wifi.png";
import washing from "../assets/washing.png";
import food from "../assets/food.png";
import sweep from "../assets/sweep.png"
const StudentFeedback=(props)=> {
  return (
    <main className="bg-white flex flex-col pr-px">
      <header className="bg-sky-100 bg-opacity-60 self-stretch flex flex-col mb-1 pt-20 pb-24 px-5 max-md:max-w-full">
        <h1 className="text-black text-3xl max-w-[401px] ml-6 self-start max-md:ml-2.5">
          Welcome to Quality Forum
        </h1>
        <section className="self-center w-full mt-14 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
              <a
                href="#"
                className="shadow-sm bg-white flex w-full grow flex-col flex-1 mx-auto px-5 py-8 rounded-xl max-md:mt-8"
              >
                <h2 className="text-black text-3xl self-center whitespace-nowrap">
                  MESS FOOD
                </h2>
                <img
                  loading="lazy"
                  src={food}
                  alt='food'
                  className="aspect-[1.41] object-contain object-center w-[145px] stroke-[1px] stroke-black overflow-hidden self-center max-w-full mt-9"
                />
              </a>
            </div>
            <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <a
                href="#"
                className="shadow-sm bg-white flex w-full grow flex-col flex-1 mx-auto pt-9 pb-6 px-5 rounded-xl max-md:mt-8"
              >
                <h2 className="text-black text-3xl self-center whitespace-nowrap">
                  SWEEPER
                </h2>
                <div className="flex-col fill-white overflow-hidden self-center relative flex aspect-[0.47413793103448276] w-[55px] max-w-full mt-7">
                  <img
                    loading="lazy"
                    src={sweep}
                    className=' object-contain object-center w-[145px] stroke-[1px] stroke-black overflow-hidden self-center max-w-full mt-2'
                    alt='sweep'/>
                </div>
              </a>
            </div>
            <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <a
                href="#"
                className="flex-col fill-white overflow-hidden relative flex aspect-[1.268181818181818] grow px-5 py-9 max-md:mt-8"
              >
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/923067f0-b69b-4993-a57d-89fd5f602ca5?apiKey=64883608ff2a440e8750635888aa042e&"
                  className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
                />
                <h2 className="relative text-black text-3xl self-center whitespace-nowrap -ml-2.5">
                  LAUNDRY
                </h2>
                <div className="flex-col relative fill-stone-800 overflow-hidden self-center flex aspect-[0.7934782608695652] w-[73px] max-w-full mt-10 py-px">
                  <img
                    loading="lazy"
                    src={washing}
                    alt='washing'
                    />
                </div>
              </a>
            </div>
            <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <a
                href="#"
                className="flex-col fill-white stroke-[1px] stroke-black overflow-hidden relative flex aspect-[1.268181818181818] grow pt-7 pb-10 px-5 max-md:mt-8"
              >
                {/* <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f8d7f30-b7f4-4b86-b863-4e84dd209695?apiKey=64883608ff2a440e8750635888aa042e&"
                  className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
                /> */}
                <h2 className="relative text-black text-3xl self-center whitespace-nowrap">
                  INTERNET
                </h2>
                <img
                  loading="lazy"
                  src={internetsy}
                  alt='wifi'
                  className="aspect-[1.3] object-contain object-center w-[103px] overflow-hidden self-center max-w-full mt-14 max-md:mt-10"
                />
              </a>
            </div>
          </div>
        </section>
        <section className="self-center w-full mt-16 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
              <form className="border shadow-sm bg-white flex grow flex-col w-full mx-auto pt-9 pb-20 px-5 rounded-xl border-solid border-black max-md:max-w-full max-md:mt-10">
                <div className="flex w-[336px] max-w-full items-start gap-5 ml-4 self-start max-md:ml-2.5">
                  <div className="self-stretch flex flex-col">
                    <h3 className="text-neutral-700 text-xl">GIVE RATING</h3>
                    <div className="bg-stone-200 flex w-[155px] max-w-full items-start justify-between gap-5 mt-6 pl-2 pr-2.5 py-1.5 rounded-lg self-start">
                      <div className="text-black text-base self-center my-auto">
                        MONDAY
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/64eaa004-f8f2-41a2-b46c-8d2bc80eec50?apiKey=64883608ff2a440e8750635888aa042e&"
                        className="aspect-[1.05] object-contain object-center w-5 overflow-hidden self-stretch max-w-full"
                      />
                    </div>
                    <div className="bg-stone-200 flex w-[155px] max-w-full items-start justify-between gap-5 mt-3 pl-2 pr-2.5 py-1.5 rounded-lg self-start">
                      <div className="text-black text-base my-auto">TUESDAY</div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b18951b-1779-4ae8-bb65-725348bee7ba?apiKey=64883608ff2a440e8750635888aa042e&"
                        className="aspect-[1.05] object-contain object-center w-5 overflow-hidden self-stretch max-w-full"
                      />
                    </div>
                    <div className="bg-stone-200 flex w-[155px] max-w-full items-start justify-between gap-5 mt-3 pl-2 pr-2.5 py-1.5 rounded-lg self-start">
                      <div className="text-black text-base self-center my-auto">
                        WEDNESDAY
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0194c721-daac-4499-93f0-138b792dcab4?apiKey=64883608ff2a440e8750635888aa042e&"
                        className="aspect-[1.11] object-contain object-center w-5 overflow-hidden self-stretch max-w-full"
                      />
                    </div>
                    <div className="bg-stone-200 flex w-[155px] max-w-full items-start justify-between gap-5 mt-3 pl-2 pr-2.5 py-1.5 rounded-lg self-start">
                      <div className="text-black text-base self-center my-auto">
                        THURSDAY
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d16ae39b-0497-4961-869a-24706b755ceb?apiKey=64883608ff2a440e8750635888aa042e&"
                        className="aspect-square object-contain object-center w-5 overflow-hidden self-stretch max-w-full"
                      />
                    </div>
                    <div className="bg-stone-200 flex w-[155px] max-w-full items-start justify-between gap-5 mt-3 px-2 py-1.5 rounded-lg self-start">
                      <div className="text-black text-base self-center my-auto">
                        FRIDAY
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/da1c5f3a-bea6-4c6a-87fe-840ba0e363ab?apiKey=64883608ff2a440e8750635888aa042e&"
                        className="aspect-[1.05] object-contain object-center w-5 overflow-hidden self-stretch max-w-full"
                      />
                    </div>
                    <div className="bg-stone-200 flex w-[155px] max-w-full items-start justify-between gap-5 mt-3 pl-2 pr-2.5 py-1.5 rounded-lg self-start">
                      <div className="text-black text-base self-center my-auto">
                        SATURDAY
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/99e5ec55-340b-4256-8af0-50dbe894f3c5?apiKey=64883608ff2a440e8750635888aa042e&"
                        className="aspect-[1.05] object-contain object-center w-5 overflow-hidden self-stretch max-w-full"
                      />
                    </div>
                  </div>
                  <div className="bg-stone-200 flex flex-col flex-1 my-auto pl-3 pr-3 py-3.5 rounded-xl">
                    <div className="text-black text-xs max-md:ml-2.5">
                      Breakfast
                    </div>
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5c3e86b9-61ff-4384-9f77-dd0e5d0c30a2?apiKey=64883608ff2a440e8750635888aa042e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5c3e86b9-61ff-4384-9f77-dd0e5d0c30a2?apiKey=64883608ff2a440e8750635888aa042e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5c3e86b9-61ff-4384-9f77-dd0e5d0c30a2?apiKey=64883608ff2a440e8750635888aa042e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5c3e86b9-61ff-4384-9f77-dd0e5d0c30a2?apiKey=64883608ff2a440e8750635888aa042e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5c3e86b9-61ff-4384-9f77-dd0e5d0c30a2?apiKey=64883608ff2a440e8750635888aa042e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5c3e86b9-61ff-4384-9f77-dd0e5d0c30a2?apiKey=64883608ff2a440e8750635888aa042e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5c3e86b9-61ff-4384-9f77-dd0e5d0c30a2?apiKey=64883608ff2a440e8750635888aa042e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5c3e86b9-61ff-4384-9f77-dd0e5d0c30a2?apiKey=64883608ff2a440e8750635888aa042e&"className="aspect-[6.48] object-contain object-center w-full overflow-hidden mt-2 self-start max-md:ml-1"
                    />
                    <div className="text-black text-xs mt-2 max-md:ml-2.5">
                      Lunch
                    </div>
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cae01cf7-ceaf-4c73-859d-2ba4bf9e9144?apiKey=64883608ff2a440e8750635888aa042e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cae01cf7-ceaf-4c73-859d-2ba4bf9e9144?apiKey=64883608ff2a440e8750635888aa042e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cae01cf7-ceaf-4c73-859d-2ba4bf9e9144?apiKey=64883608ff2a440e8750635888aa042e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cae01cf7-ceaf-4c73-859d-2ba4bf9e9144?apiKey=64883608ff2a440e8750635888aa042e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cae01cf7-ceaf-4c73-859d-2ba4bf9e9144?apiKey=64883608ff2a440e8750635888aa042e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cae01cf7-ceaf-4c73-859d-2ba4bf9e9144?apiKey=64883608ff2a440e8750635888aa042e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cae01cf7-ceaf-4c73-859d-2ba4bf9e9144?apiKey=64883608ff2a440e8750635888aa042e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cae01cf7-ceaf-4c73-859d-2ba4bf9e9144?apiKey=64883608ff2a440e8750635888aa042e&"className="aspect-[6.8] object-contain object-center w-full overflow-hidden mt-2 self-start max-md:ml-1"
                    />
                    <div className="text-black text-xs mt-2.5 max-md:ml-1.5">
                      Snacks
                    </div>
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/dc6f0510-a6c7-4fe6-8d45-1585e439ec47?apiKey=64883608ff2a440e8750635888aa042e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc6f0510-a6c7-4fe6-8d45-1585e439ec47?apiKey=64883608ff2a440e8750635888aa042e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc6f0510-a6c7-4fe6-8d45-1585e439ec47?apiKey=64883608ff2a440e8750635888aa042e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc6f0510-a6c7-4fe6-8d45-1585e439ec47?apiKey=64883608ff2a440e8750635888aa042e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc6f0510-a6c7-4fe6-8d45-1585e439ec47?apiKey=64883608ff2a440e8750635888aa042e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc6f0510-a6c7-4fe6-8d45-1585e439ec47?apiKey=64883608ff2a440e8750635888aa042e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc6f0510-a6c7-4fe6-8d45-1585e439ec47?apiKey=64883608ff2a440e8750635888aa042e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/dc6f0510-a6c7-4fe6-8d45-1585e439ec47?apiKey=64883608ff2a440e8750635888aa042e&"className="aspect-[6.75] object-contain object-center w-full overflow-hidden mt-2 self-start"
                    />
                    <div className="text-black text-xs mt-2 self-start max-md:ml-1.5">
                      Dinner
                    </div>
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/131d87a6-f06f-45e8-97f9-79dbf8186b7a?apiKey=64883608ff2a440e8750635888aa042e&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/131d87a6-f06f-45e8-97f9-79dbf8186b7a?apiKey=64883608ff2a440e8750635888aa042e&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/131d87a6-f06f-45e8-97f9-79dbf8186b7a?apiKey=64883608ff2a440e8750635888aa042e&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/131d87a6-f06f-45e8-97f9-79dbf8186b7a?apiKey=64883608ff2a440e8750635888aa042e&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/131d87a6-f06f-45e8-97f9-79dbf8186b7a?apiKey=64883608ff2a440e8750635888aa042e&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/131d87a6-f06f-45e8-97f9-79dbf8186b7a?apiKey=64883608ff2a440e8750635888aa042e&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/131d87a6-f06f-45e8-97f9-79dbf8186b7a?apiKey=64883608ff2a440e8750635888aa042e&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/131d87a6-f06f-45e8-97f9-79dbf8186b7a?apiKey=64883608ff2a440e8750635888aa042e&"className="aspect-[6.43] object-contain object-center w-full overflow-hidden mt-2 self-start"
                    />
                  </div>
                </div>
                <div className="bg-stone-200 flex w-[155px] max-w-full items-start justify-between gap-5 ml-4 mt-3 pl-2 pr-2.5 py-1.5 rounded-lg self-start max-md:ml-2.5">
                  <div className="text-black text-base my-auto">SUNDAY</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5fcb2a6f-8e31-41c2-9020-cbf9a9d48d4e?apiKey=64883608ff2a440e8750635888aa042e&"
                    className="aspect-[1.05] object-contain object-center w-5 overflow-hidden self-stretch max-w-full"
                  />
                </div>
              </form>
            </div>
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="border shadow-sm bg-white flex grow flex-col w-full mx-auto px-5 py-8 rounded-xl border-solid border-black max-md:max-w-full max-md:mt-10">
                <div className="self-center flex w-[482px] max-w-full flex-col">
                  <h3 className="text-neutral-700 text-xl">Comments</h3>
                  <div className="bg-zinc-300 flex w-full h-[333px] flex-col mt-7 rounded-sm self-start max-md:max-w-full" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
    </main>
  );
}
export default StudentFeedback