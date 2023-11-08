import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const MessFeedback = () => {
  const [breakfastRating, setBreakfastRating] = React.useState(1);
  const [lunchRating, setLunchRating] = React.useState(1);
  const [snacksRating, setSnacksRating] = React.useState(1);
  const [dinnerRating, setDinnerRating] = React.useState(1);

  return (
    <section className="self-center w-full mt-10 max-md:max-w-full max-md:mt-8">
      <div className="flex h-[420px] max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
          <form className="border shadow-sm bg-white flex grow flex-col w-full mx-auto pt-9 px-5 rounded-xl border-solid border-black max-md:max-w-full max-md:mt-10">
            <div className="flex w-[336px] max-w-full items-start gap-5 ml-4 self-start max-md:ml-2.5">
              <div className="self-stretch flex flex-col">
                <h3 className="text-neutral-700 text-xl mb-4">GIVE RATING</h3>
                <div className="relative inline-block text-left">
                  <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full justify-between rounded-lg border  px-4 py-2 text-left text-sm font-medium hover:bg-purple-200 focus:outline-none focus-visible:ring">
                            <span>Monday</span>
                            <ChevronUpIcon
                              className={`${
                                open ? "rotate-180 transform" : ""
                              } h-5 w-5`}
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                            <div className="relative inline-block text-left">
                              <div className="pl-3 mr-3 mb-3 md:mb-0 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                                Breakfast
                                <Rating
                                  name="breakfast-rating"
                                  value={breakfastRating}
                                  onChange={(event, newValue) => {
                                    setBreakfastRating(newValue);
                                  }}
                                />
                              </div>
                            </div>
                            <div className="relative inline-block text-left pt-2">
                              <div className=" pl-3 mr-3 mb-3 md:mb-0 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                                Lunch
                                <Rating
                                  name="lunch-rating"
                                  value={lunchRating}
                                  onChange={(event, newValue) => {
                                    setLunchRating(newValue);
                                  }}
                                />
                              </div>
                            </div>
                            <div className="relative inline-block text-left pt-2">
                              <div className="pl-3 mr-3 mb-3 md:mb-0 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                                Snacks
                                <Rating
                                  name="snacks-rating"
                                  value={snacksRating}
                                  onChange={(event, newValue) => {
                                    setSnacksRating(newValue);
                                  }}
                                />
                              </div>
                            </div>
                            <div className="relative inline-block text-left pt-2">
                              <div className="pl-3 mr-3 mb-3 md:mb-0 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                                Dinner
                                <Rating
                                  name="dinner-rating"
                                  value={dinnerRating}
                                  onChange={(event, newValue) => {
                                    setDinnerRating(newValue);
                                  }}
                                />
                              </div>
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className=" mt-2 flex w-full justify-between rounded-lg border px-4 py-2 text-left text-sm font-medium  hover:bg-purple-200 focus:outline-none focus-visible:ring">

                            <span>Tuesday</span>
                            <ChevronUpIcon
                              className={`${
                                open ? "rotate-180 transform" : ""
                              } h-5 w-5`}
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                            <div className="relative inline-block text-left">
                              <div className="pl-3 mr-3 mb-3 md:mb-0 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                                Breakfast
                                <Rating
                                  name="breakfast-rating"
                                  value={breakfastRating}
                                  onChange={(event, newValue) => {
                                    setBreakfastRating(newValue);
                                  }}
                                />
                              </div>
                            </div>
                            <div className="relative inline-block text-left pt-2">
                              <div className=" pl-3 mr-3 mb-3 md:mb-0 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                                Lunch
                                <Rating
                                  name="lunch-rating"
                                  value={lunchRating}
                                  onChange={(event, newValue) => {
                                    setLunchRating(newValue);
                                  }}
                                />
                              </div>
                            </div>
                            <div className="relative inline-block text-left pt-2">
                              <div className="pl-3 mr-3 mb-3 md:mb-0 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                                Snacks
                                <Rating
                                  name="snacks-rating"
                                  value={snacksRating}
                                  onChange={(event, newValue) => {
                                    setSnacksRating(newValue);
                                  }}
                                />
                              </div>
                            </div>
                            <div className="relative inline-block text-left pt-2">
                              <div className="pl-3 mr-3 mb-3 md:mb-0 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                                Dinner
                                <Rating
                                  name="dinner-rating"
                                  value={dinnerRating}
                                  onChange={(event, newValue) => {
                                    setDinnerRating(newValue);
                                  }}
                                />
                              </div>
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="mt-2 flex w-full justify-between rounded-lg border px-4 py-2 text-left text-sm font-medium hover:bg-purple-200 focus:outline-none focus-visible:ring">

                            <span>Wednesday</span>
                            <ChevronUpIcon
                              className={`${
                                open ? "rotate-180 transform" : ""
                              } h-5 w-5`}
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                            <div className="relative inline-block text-left">
                              <div className="pl-3 mr-3 mb-3 md:mb-0 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                                Breakfast
                                <Rating
                                  name="breakfast-rating"
                                  value={breakfastRating}
                                  onChange={(event, newValue) => {
                                    setBreakfastRating(newValue);
                                  }}
                                />
                              </div>
                            </div>
                            <div className="relative inline-block text-left pt-2">
                              <div className=" pl-3 mr-3 mb-3 md:mb-0 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                                Lunch
                                <Rating
                                  name="lunch-rating"
                                  value={lunchRating}
                                  onChange={(event, newValue) => {
                                    setLunchRating(newValue);
                                  }}
                                />
                              </div>
                            </div>
                            <div className="relative inline-block text-left pt-2">
                              <div className="pl-3 mr-3 mb-3 md:mb-0 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                                Snacks
                                <Rating
                                  name="snacks-rating"
                                  value={snacksRating}
                                  onChange={(event, newValue) => {
                                    setSnacksRating(newValue);
                                  }}
                                />
                              </div>
                            </div>
                            <div className="relative inline-block text-left pt-2">
                              <div className="pl-3 mr-3 mb-3 md:mb-0 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                                Dinner
                                <Rating
                                  name="dinner-rating"
                                  value={dinnerRating}
                                  onChange={(event, newValue) => {
                                    setDinnerRating(newValue);
                                  }}
                                />
                              </div>
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="mt-2 flex w-full justify-between rounded-lg border px-4 py-2 text-left text-sm font-medium hover:bg-purple-200 focus:outline-none focus-visible:ring ">

                            <span>Thursday</span>
                            <ChevronUpIcon
                              className={`${
                                open ? "rotate-180 transform" : ""
                              } h-5 w-5`}
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                            <div className="relative inline-block text-left">
                              <div className="pl-3 mr-3 mb-3 md:mb-0 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                                Breakfast
                                <Rating
                                  name="breakfast-rating"
                                  value={breakfastRating}
                                  onChange={(event, newValue) => {
                                    setBreakfastRating(newValue);
                                  }}
                                />
                              </div>
                            </div>
                            <div className="relative inline-block text-left pt-2">
                              <div className=" pl-3 mr-3 mb-3 md:mb-0 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                                Lunch
                                <Rating
                                  name="lunch-rating"
                                  value={lunchRating}
                                  onChange={(event, newValue) => {
                                    setLunchRating(newValue);
                                  }}
                                />
                              </div>
                            </div>
                            <div className="relative inline-block text-left pt-2">
                              <div className="pl-3 mr-3 mb-3 md:mb-0 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                                Snacks
                                <Rating
                                  name="snacks-rating"
                                  value={snacksRating}
                                  onChange={(event, newValue) => {
                                    setSnacksRating(newValue);
                                  }}
                                />
                              </div>
                            </div>
                            <div className="relative inline-block text-left pt-2">
                              <div className="pl-3 mr-3 mb-3 md:mb-0 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                                Dinner
                                <Rating
                                  name="dinner-rating"
                                  value={dinnerRating}
                                  onChange={(event, newValue) => {
                                    setDinnerRating(newValue);
                                  }}
                                />
                              </div>
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className=" mt-2 flex w-full justify-between rounded-lg border  px-4 py-2 text-left text-sm font-medium hover:bg-purple-200 focus:outline-none focus-visible:ring">

                            <span>Friday</span>
                            <ChevronUpIcon
                              className={`${
                                open ? "rotate-180 transform" : ""
                              } h-5 w-5`}
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                            <div className="relative inline-block text-left">
                              <div className="pl-3 mr-3 mb-3 md:mb-0 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                                Breakfast
                                <Rating
                                  name="breakfast-rating"
                                  value={breakfastRating}
                                  onChange={(event, newValue) => {
                                    setBreakfastRating(newValue);
                                  }}
                                />
                              </div>
                            </div>
                            <div className="relative inline-block text-left pt-2">
                              <div className=" pl-3 mr-3 mb-3 md:mb-0 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                                Lunch
                                <Rating
                                  name="lunch-rating"
                                  value={lunchRating}
                                  onChange={(event, newValue) => {
                                    setLunchRating(newValue);
                                  }}
                                />
                              </div>
                            </div>
                            <div className="relative inline-block text-left pt-2">
                              <div className="pl-3 mr-3 mb-3 md:mb-0 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                                Snacks
                                <Rating
                                  name="snacks-rating"
                                  value={snacksRating}
                                  onChange={(event, newValue) => {
                                    setSnacksRating(newValue);
                                  }}
                                />
                              </div>
                            </div>
                            <div className="relative inline-block text-left pt-2">
                              <div className="pl-3 mr-3 mb-3 md:mb-0 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                                Dinner
                                <Rating
                                  name="dinner-rating"
                                  value={dinnerRating}
                                  onChange={(event, newValue) => {
                                    setDinnerRating(newValue);
                                  }}
                                />
                              </div>
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="mt-2 flex w-full justify-between rounded-lg border  px-4 py-2 text-left text-sm font-medium hover:bg-purple-200 focus:outline-none focus-visible:ring">

                            <span>Saturday</span>
                            <ChevronUpIcon
                              className={`${
                                open ? "rotate-180 transform" : ""
                              } h-5 w-5`}
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                            <div className="relative inline-block text-left">
                              <div className="pl-3 mr-3 mb-3 md:mb-0 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                                Breakfast
                                <Rating
                                  name="breakfast-rating"
                                  value={breakfastRating}
                                  onChange={(event, newValue) => {
                                    setBreakfastRating(newValue);
                                  }}
                                />
                              </div>
                            </div>
                            <div className="relative inline-block text-left pt-2">
                              <div className=" pl-3 mr-3 mb-3 md:mb-0 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                                Lunch
                                <Rating
                                  name="lunch-rating"
                                  value={lunchRating}
                                  onChange={(event, newValue) => {
                                    setLunchRating(newValue);
                                  }}
                                />
                              </div>
                            </div>
                            <div className="relative inline-block text-left pt-2">
                              <div className="pl-3 mr-3 mb-3 md:mb-0 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                                Snacks
                                <Rating
                                  name="snacks-rating"
                                  value={snacksRating}
                                  onChange={(event, newValue) => {
                                    setSnacksRating(newValue);
                                  }}
                                />
                              </div>
                            </div>
                            <div className="relative inline-block text-left pt-2">
                              <div className="pl-3 mr-3 mb-3 md:mb-0 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                                Dinner
                                <Rating
                                  name="dinner-rating"
                                  value={dinnerRating}
                                  onChange={(event, newValue) => {
                                    setDinnerRating(newValue);
                                  }}
                                />
                              </div>
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className=" mt-2 flex w-full justify-between rounded-lg border  px-4 py-2 text-left text-sm font-medium hover:bg-purple-200 focus:outline-none focus-visible:ring">
                            <span>Sunday</span>
                            <ChevronUpIcon
                              className={`${
                                open ? "rotate-180 transform" : ""
                              } h-5 w-5`}
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                            <div className="relative inline-block text-left">
                              <div className="pl-3 mr-3 mb-3 md:mb-0 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                                Breakfast
                                <Rating
                                  name="breakfast-rating"
                                  value={breakfastRating}
                                  onChange={(event, newValue) => {
                                    setBreakfastRating(newValue);
                                  }}
                                />
                              </div>
                            </div>
                            <div className="relative inline-block text-left pt-2">
                              <div className=" pl-3 mr-3 mb-3 md:mb-0 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                                Lunch
                                <Rating
                                  name="lunch-rating"
                                  value={lunchRating}
                                  onChange={(event, newValue) => {
                                    setLunchRating(newValue);
                                  }}
                                />
                              </div>
                            </div>
                            <div className="relative inline-block text-left pt-2">
                              <div className="pl-3 mr-3 mb-3 md:mb-0 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                                Snacks
                                <Rating
                                  name="snacks-rating"
                                  value={snacksRating}
                                  onChange={(event, newValue) => {
                                    setSnacksRating(newValue);
                                  }}
                                />
                              </div>
                            </div>
                            <div className="relative inline-block text-left pt-2">
                              <div className="pl-3 mr-3 mb-3 md:mb-0 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                                Dinner
                                <Rating
                                  name="dinner-rating"
                                  value={dinnerRating}
                                  onChange={(event, newValue) => {
                                    setDinnerRating(newValue);
                                  }}
                                />
                              </div>
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
          <div className="border h-[420px] shadow-sm bg-white flex grow flex-col w-full mx-auto px-5 py-8 rounded-xl border-solid border-black max-md:max-w-full max-md:mt-10">
            <div className="self-center flex w-[482px] max-w-full flex-col">
              <h3 className="text-neutral-700 text-xl">Comments/Suggestion</h3>
              <div className="bg-zinc-300 flex w-full h-[250px] flex-col mt-7 rounded-sm self-start max-md:max-w-full">
                <textarea
                  className="w-full p-3 border rounded border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
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
