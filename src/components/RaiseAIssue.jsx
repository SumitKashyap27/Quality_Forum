import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const RaiseAIssue = () => {
  const [selectedIssues, setSelectedIssues] = useState([]);

  const handleIssueSelect = (issue) => {
    const updatedSelectedIssues = selectedIssues.includes(issue)
      ? selectedIssues.filter((selected) => selected !== issue)
      : [...selectedIssues, issue];

    setSelectedIssues(updatedSelectedIssues);
  };

  return (
    <>
      <div className="flex justify-center text-4xl lg:text-5xl xl:text-6xl pt-4">
        Share your complaint
      </div>

      <div className="flex justify-center h-[420px] max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
          <div className="flex w-[336px] max-w-full items-start gap-5 ml-4 self-start max-md:ml-2.5">
            <div className="self-stretch flex flex-col">
              <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
                {[
                  "Food",
                  "Medical",
                  "Drinking Water",
                  "Toilets",
                  "Staff Behaviour",
                  "Ground",
                  "Sports/GYM",
                  "Ground",
                  "Other",
                ].map((issue, index) => (
                  <div key={index}>
                    <input
                      type="checkbox"
                      id={`issue-${index}`}
                      onChange={() => handleIssueSelect(issue)}
                      className="hidden"
                    />
                    <label
                      htmlFor={`issue-${index}`}
                      className={`flex w-full justify-between rounded-lg border px-4 py-2 text-left text-sm font-medium hover:bg-purple-200 focus:outline-none focus-visible:ring ${
                        selectedIssues.includes(issue) ? "bg-red-300" : ""
                      }`}
                    >
                      <span>{issue}</span>
                      <ChevronUpIcon
                        className={`${
                          selectedIssues.includes(issue)
                            ? "rotate-180 transform"
                            : ""
                        } h-5 w-5`}
                      />
                    </label>
                    {selectedIssues.includes(issue) && (
                      <div className="px-4 pt-4 pb-2 text-sm text-gray-500">
                        <div className="relative inline-block text-left">
                          <textarea
                            className="w-full p-3 border rounded border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
                            rows="6"
                            placeholder="Enter your comment/suggestion here"
                          ></textarea>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RaiseAIssue;
