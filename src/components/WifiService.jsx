import React,{useState} from "react";
import Rating from "@mui/material/Rating";

const WifiService = () => {

  const [speedRating, setSpeedRating] = useState(1);
  const [connectivityRating, setConnectivityRating] = useState(1);
  const [rangeRating, setRangeRating] = useState(1);
  
  const [speedRatingCount, setSpeedRatingCount] = useState(0);
  const [connectivityRatingCount, setConnectivityRatingCount] = useState(0);
  const [rangeRatingCount, setRangeRatingCount] = useState(0);
  
  const handleSpeedRatingChange = (event, newValue) => {
    setSpeedRating(newValue);
    setSpeedRatingCount((prevCount) => prevCount + 1);
  };
  
  const handleConnectivityRatingChange = (event, newValue) => {
      setConnectivityRating(newValue);
    setConnectivityRatingCount((prevCount) => prevCount + 1);
  };
  
  const handleRangeRatingChange = (event, newValue) => {
    setRangeRating(newValue);
    setRangeRatingCount((prevCount) => prevCount + 1);
  };
  
  // Log ratings to the console
  console.log('Speed Rating:', speedRating, 'Count:', speedRatingCount);
  console.log('Connectivity Rating:', connectivityRating, 'Count:', connectivityRatingCount);
  console.log('Range Rating:', rangeRating, 'Count:', rangeRatingCount);
  
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
                    SPEED
                    <Rating
                      name="speed-rating"
                      value={speedRating}
                      onChange={handleSpeedRatingChange}
                    />
                  </div>
                </div>
                <div className="relative inline-block text-left pt-2">
                <div
                    variant="contained"
                    className="mr-3 mb-3 md:mb-0 focus:outline-none border solid focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                    CONNECTIVITY
                    <Rating
                      name="connectivity-rating"
                      value={connectivityRating}
                      onChange={handleConnectivityRatingChange}
                    />
                  </div>
                </div>
                <div className="relative inline-block text-left pt-2">
                <div
                    variant="contained"
                    className="mr-3 mb-3 md:mb-0 focus:outline-none border solid focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                    RANGE
                    <Rating
                      name="range-rating"
                      value={rangeRating}
                      onChange={handleRangeRatingChange}
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
export default WifiService;
