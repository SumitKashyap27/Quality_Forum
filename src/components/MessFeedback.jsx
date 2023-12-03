import React, { useState, useEffect } from "react";
import Rating from "@mui/material/Rating";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const MessFeedback = () => {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const [ratings, setRatings] = useState(
    daysOfWeek.reduce((acc, day) => {
      acc[day] = {
        breakfast: 0,
        lunch: 0,
        snacks: 0,
        dinner: 0,
      };
      return acc;
    }, {})
  );

  // Function to log the ratings for each meal category
  const logRatings = (day) => {
    console.log(`${day} Ratings:`, ratings[day]);
  };

  useEffect(() => {
    daysOfWeek.forEach((day) => logRatings(day));
  }, [ratings]);

  return (
    <section className="self-center w-full mt-10 max-md:max-w-full max-md:mt-8">
      <div className="flex h-[420px] max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
          <form className="border shadow-sm bg-white flex grow flex-col w-full mx-auto pt-9 px-5 rounded-xl border-solid border-black max-md:max-w-full max-md:mt-10">
            <div className="flex w-[336px] max-w-full items-start gap-5 ml-4 self-start max-md:ml-2.5">
              <div className="self-stretch flex flex-col">
                <h3 className="text-neutral-700 text-xl mb-4">GIVE RATING</h3>
                <div className="relative inline-block text-left">
                  <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2 my-auto">
                    {daysOfWeek.map((day) => (
                      <Disclosure key={day}>
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg border  px-4 py-2 my-2 text-left text-sm font-medium hover:bg-purple-200 focus:outline-none focus-visible:ring">
                              <span>{day}</span>
                              <ChevronUpIcon
                                className={`${
                                  open ? "rotate-180 transform" : ""
                                } h-5 w-5`}
                              />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                              {["Breakfast", "Lunch", "Snacks", "Dinner"].map(
                                (meal) => (
                                  <div
                                    key={meal}
                                    className="relative inline-block text-left pt-2"
                                  >
                                    <div className="pl-3 mr-3 mb-3 md:mb-0 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                                      {meal}
                                      <Rating
                                        name={`${day.toLowerCase()}-${meal.toLowerCase()}-rating`}
                                        value={ratings[day][meal.toLowerCase()]}
                                        onChange={(event, newValue) => {
                                          setRatings((prevRatings) => ({
                                            ...prevRatings,
                                            [day]: {
                                              ...prevRatings[day],
                                              [meal.toLowerCase()]: newValue,
                                            },
                                          }));
                                        }}
                                      />
                                    </div>
                                  </div>
                                )
                              )}
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
          <div className="border h-auto shadow-sm bg-white flex grow flex-col w-full mx-auto px-5 py-8 rounded-xl border-solid border-black max-md:max-w-full max-md:mt-10">
            <div className="self-center flex w-[482px] max-w-full flex-col">
              <h3 className=" text-xl">Comments/Suggestion</h3>
              <div className=" flex w-full h-auto flex-col mt-7 rounded-sm self-start max-md:max-w-full">
                <textarea
                  className="w-full p-3 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                  rows="6"
                  placeholder="Enter your comment/suggestion here"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessFeedback;
