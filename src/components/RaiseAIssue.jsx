import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";

// Individual component for an issue item
const IssueItem = ({ issue, selected, onClick }) => (
  <div
    className={`flex w-full justify-between rounded-lg border px-4 py-2 text-right text-sm font-medium focus:outline-none focus-visible:ring ${
      selected ? "bg-red-500" : ""
    }`}
    onClick={onClick}
  >
    <div className={`text-sm font-medium ${selected ? "text-white" : ""}`}>
      {issue}
    </div>
    <Checkbox
      checked={selected}
      onChange={() => {}}
      sx={{ color: selected ? "#FFF" : "#1976D2" }}
      className="ml-auto"
    />
  </div>
);

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
              <div className="mx-auto mt-2 w-full max-w-md rounded-2xl bg-white p-2">
                {/* Use the IssueItem component for each issue */}
                <IssueItem

                  issue="Food"
                  selected={selectedIssues.includes("Food")}
                  onClick={() => handleIssueSelect("Food")}
                  className={"mt-2"}
                />
                <IssueItem
                  issue="Medical"
                  selected={selectedIssues.includes("Medical")}
                  onClick={() => handleIssueSelect("Medical")}
                  className={"mt-2"}
                />
                <IssueItem
                  issue="Drinking Water"
                  selected={selectedIssues.includes("Drinking Water")}
                  onClick={() => handleIssueSelect("Drinking Water")}
                  className={"mt-2"}
                />
                <IssueItem
                  issue="Ground"
                  selected={selectedIssues.includes("Ground")}
                  onClick={() => handleIssueSelect("Ground")}
                  className={"mt-2"}
                />
                <IssueItem
                  issue="Sports/GYM"
                  selected={selectedIssues.includes("Sports/GYM")}
                  onClick={() => handleIssueSelect("Sports/GYM")}
                  className={"mt-2"}
                />
                <IssueItem
                  issue="Other-Please Specify"
                  selected={selectedIssues.includes("others")}
                  onClick={() => handleIssueSelect("others")}
                  className={"mt-2"}
                  
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RaiseAIssue;
