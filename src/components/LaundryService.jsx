import React,{useState} from "react";
import Rating from "@mui/material/Rating";

const LaundryService = () => {
  const [machineConditionRating, setMachineConditionRating] = useState(1);
  const [cleanlinessRating, setCleanlinessRating] = useState(1);
  const [availabilityAccessibilityRating, setAvailabilityAccessibilityRating] = useState(1);

  const [machineConditionRatingCount, setMachineConditionRatingCount] = useState(0);
  const [cleanlinessRatingCount, setCleanlinessRatingCount] = useState(0);
  const [availabilityAccessibilityRatingCount, setAvailabilityAccessibilityRatingCount] = useState(0);

  const handleMachineConditionRatingChange = (_, newValue) => {
    setMachineConditionRating(newValue);
    setMachineConditionRatingCount((prevCount) => prevCount + 1);
  };

  const handleCleanlinessRatingChange = (_, newValue) => {
    setCleanlinessRating(newValue);
    setCleanlinessRatingCount((prevCount) => prevCount + 1);
  };

  const handleAvailabilityAccessibilityRatingChange = (_, newValue) => {
    setAvailabilityAccessibilityRating(newValue);
    setAvailabilityAccessibilityRatingCount((prevCount) => prevCount + 1);
  };

  // Log ratings to the console
  console.log('Machine Condition Rating:', machineConditionRating, 'Count:', machineConditionRatingCount);
  console.log('Cleanliness Rating:', cleanlinessRating, 'Count:', cleanlinessRatingCount);
  console.log('Availability & Accessibility Rating:', availabilityAccessibilityRating, 'Count:', availabilityAccessibilityRatingCount);



  return (
    <section className="self-center w-full mt-10 max-md:max-w-full max-md:mt-8">
      <div className="flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
          <form className="border shadow-sm bg-white flex grow flex-col w-full mx-auto pt-9 pb-20 px-5 rounded-xl border-solid border-black max-md:max-w-full max-md:mt-10">
            <div className="flex w-[336px] max-w-full items-start gap-5 ml-4 self-start max-md:ml-2.5">
              <div className="self-stretch flex flex-col">
                <h3 className="text-neutral-700 text-xl mb-4">GIVE RATING</h3>
                <div className="relative inline-block text-left">
                  <div
                    variant="contained"
                    className="mr-3 mb-3 md:mb-0 focus:outline-none border solid focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                    MACHINE CONDITION
                    <Rating
                      name="machine-condition-rating"
                      value={machineConditionRating}
                      onChange={handleMachineConditionRatingChange}
                    />
                  </div>
                </div>
                <div className="relative inline-block text-left pt-2">
                  <div
                    variant="contained"
                    className="mr-3 mb-3 md:mb-0 focus:outline-none border solid focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                  >
                    CLEANLINESS
                    <Rating
                      name="cleanliness-rating"
                      value={cleanlinessRating}
                      onChange={handleCleanlinessRatingChange}
                    />
                  </div>
                </div>
                <div className="relative inline-block text-left pt-2">
                  <div
                    variant="contained"
                    className="mr-3 mb-3 md:mb-0 focus:outline-none border solid focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                  >
                    AVAILABILITY & ACCESSIBILITY
                    <Rating
                      name="availability-accessibility-rating"
                      value={availabilityAccessibilityRating}
                      onChange={handleAvailabilityAccessibilityRatingChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
          <div className="border shadow-sm bg-white flex grow flex-col w-full mx-auto px-5 py-8 rounded-xl border-solid border-black max-md:max-w-full max-md:mt-10">
            <div className="self-center flex w-[482px] max-w-full flex-col">
              <h3 className="text-neutral-700 text-xl">Comments/Suggestion</h3>
              <div className=" flex w-full h-auto flex-col mt-7 rounded-sm self-start max-md:max-w-full">
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
export default LaundryService;
