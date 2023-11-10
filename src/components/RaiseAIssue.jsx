import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

// ... (other imports)

// const plans = [
//   {
//     name: 'Food',
//   },
//   {
//     name: 'Medical',
//     ram: '16GB',
//     cpus: '8 CPUs',
//     disk: '512 GB SSD disk',
//   },
//   {
//     name: 'Drinking Water',
//     ram: '32GB',
//     cpus: '12 CPUs',
//     disk: '1024 GB SSD disk',
//   },
//   {
//     name: 'Internet',
//     ram: '32GB',
//     cpus: '12 CPUs',
//     disk: '1024 GB SSD disk',
//   },
//   {
//     name: 'Staff Behviour',
//     ram: '32GB',
//     cpus: '12 CPUs',
//     disk: '1024 GB SSD disk',
//   },
//   {
//     name: 'Ground',
//     ram: '32GB',
//     cpus: '12 CPUs',
//     disk: '1024 GB SSD disk',
//   },
//   {
//     name: 'GYM',
//     ram: '32GB',
//     cpus: '12 CPUs',
//     disk: '1024 GB SSD disk',
//   },
//   {
//     name: 'Insects/Mosquetos',
//     ram: '32GB',
//     cpus: '12 CPUs',
//     disk: '1024 GB SSD disk',
//   },
//   {
//     name: 'Other',
//     ram: '32GB',
//     cpus: '12 CPUs',
//     disk: '1024 GB SSD disk',
//   },
// ];

const RaiseAIssue = () => {
  // const [anchorEl, setAnchorEl] = useState(null);

  // const handleOpen = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  return (
    <>
      <div className="flex justify-center text-4xl lg:text-5xl xl:text-6xl pt-4">
        Share your complaint
      </div>
      <div className="flex justify-center h-[420px] max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
          <div className="flex w-[336px] max-w-full items-start gap-5 ml-4 self-start max-md:ml-2.5">
            <div className="self-stretch flex flex-col">
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
                            <textarea
                              className="w-full p-3 border rounded border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
                              rows="6"
                              placeholder="Enter your comment/suggestion here"
                            ></textarea>
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
                            <textarea
                              className="w-full p-3 border rounded border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
                              rows="6"
                              placeholder="Enter your comment/suggestion here"
                            ></textarea>
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
                            <textarea
                              className="w-full p-3 border rounded border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
                              rows="6"
                              placeholder="Enter your comment/suggestion here"
                            ></textarea>
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
                            <textarea
                              className="w-full p-3 border rounded border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
                              rows="6"
                              placeholder="Enter your comment/suggestion here"
                            ></textarea>
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
                            <textarea
                              className="w-full p-3 border rounded border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
                              rows="6"
                              placeholder="Enter your comment/suggestion here"
                            ></textarea>
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RaiseAIssue;
