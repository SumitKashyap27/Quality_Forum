import React, { useState} from 'react';
import food from "../assets/food.png";
import sweep from "../assets/sweep.png";
import washing from "../assets/washing.png";
import internetsy from "../assets/wifi.png";
import MessFeedback from './MessFeedback';
import SweeperService from './SweeperService'; 
import LaundryService from './LaundryService'; 
import WifiService from './WifiService';

const AddStudent = (props) => {
  const [isMessFeedbackVisible, setMessFeedbackVisible] = useState(false);
  const [isSweeperServiceVisible, setSweeperServiceVisible] = useState(false);
  const [isLaundryServiceVisible, setLaundryServiceVisible] = useState(false);
  const [isWifiServiceVisible, setWifiServiceVisible] = useState(false);

  const showMessFeedback = () => {
    setMessFeedbackVisible(true);
    setSweeperServiceVisible(false);
    setLaundryServiceVisible(false);
    setWifiServiceVisible(false);
  };

  const showSweeperService = () => {
    setMessFeedbackVisible(false);
    setSweeperServiceVisible(true);
    setLaundryServiceVisible(false);
    setWifiServiceVisible(false);
  };

  const showLaundryService = () => {
    setMessFeedbackVisible(false);
    setSweeperServiceVisible(false);
    setLaundryServiceVisible(true);
    setWifiServiceVisible(false);
  };

  const showWifiService = () => {
    setMessFeedbackVisible(false);
    setSweeperServiceVisible(false);
    setLaundryServiceVisible(false);
    setWifiServiceVisible(true);
  };

  return (
    <main>
      <header className="bg-sky-100 bg-opacity-60 self-stretch flex flex-col mb-1 pb-24 px-5 max-md:max-w-full">
        <section className="self-center w-full mt-4 max-md:max-w-full max-md:mt-2">
          <div className="gap-3 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col drop-shadow-xl items-stretch w-3/12 max-md:w-full max-md:ml-0">
              <button
                onClick={showMessFeedback}
                className={`flex w-full grow flex-col flex-1 mx-auto px-3 py-6 rounded-xl max-md:mt-2 ${
                  isMessFeedbackVisible
                    ? 'shadow-lg bg-blue-500 text-white transform scale-105 transition-transform'
                    : 'shadow-sm bg-white text-black transform scale-100 transition-transform'
                }`}
              >
                <h2 className="text-black text-2xl self-center whitespace-nowrap">
                  MESS FOOD
                </h2>
                <img
                  loading="lazy"
                  src={food}
                  alt='food'
                  className="aspect-[1.41] object-contain object-center w-[100px] stroke-[1px] stroke-black overflow-hidden self-center max-w-full mt-4"
                />
              </button>

            </div>
            <div className="flex drop-shadow-xl flex-col items-stretch w-3/12 ml-2 max-md:w-full max-md:ml-0">
              <button
                onClick={showSweeperService}
                className={`flex w-full grow flex-col flex-1 mx-auto px-3 py-6 rounded-xl max-md:mt-2 ${
                  isSweeperServiceVisible
                    ? 'shadow-lg bg-blue-500 text-white transform scale-105 transition-transform'
                    : 'shadow-sm bg-white text-black transform scale-100 transition-transform'
                }`}
              >
                <h2 className="text-black text-2xl self-center whitespace-nowrap">
                  SWEEPER
                </h2>
                <img
                  loading="lazy"
                  src={sweep}
                  alt='sweep'
                  className="aspect-[1.41] object-contain object-center w-[100px] stroke-[1px] stroke-black overflow-hidden self-center max-w-full mt-4"
                />
              </button>
              
            </div>
            <div className="flex drop-shadow-xl flex-col items-stretch w-3/12 ml-2 max-md:w-full max-md:ml-0">
              <button
                onClick={showLaundryService}
                className={`flex w-full grow flex-col flex-1 mx-auto px-3 py-6 rounded-xl max-md:mt-2 ${
                  isLaundryServiceVisible
                    ? 'shadow-lg bg-blue-500 text-white transform scale-105 transition-transform'
                    : 'shadow-sm bg-white text-black transform scale-100 transition-transform'
                }`}
              >
                <h2 className="text-black text-2xl self-center whitespace-nowrap">
                  LAUNDRY
                </h2>
                <img
                  loading="lazy"
                  src={washing}
                  alt='washing'
                  className="aspect-[1.41] object-contain object-center w-[100px] stroke-[1px] stroke-black overflow-hidden self-center max-w-full mt-4"
                />
              </button>
             
            </div>
            <div className="flex flex-col drop-shadow-xl items-stretch w-3/12 ml-2 max-md:w-full max-md:ml-0">
              <button
                onClick={showWifiService}
                className={`flex w-full grow flex-col flex-1 mx-auto px-3 py-6 rounded-xl max-md:mt-2 ${
                  isWifiServiceVisible
                    ? 'shadow-lg bg-blue-500 text-white transform scale-105 transition-transform'
                    : 'shadow-sm bg-white text-black transform scale-100 transition-transform'
                }`}
              >
                <h2 className="text-black text-2xl self-center whitespace-nowrap">
                  INTERNET
                </h2>
                <img
                  loading="lazy"
                  src={internetsy}
                  alt='wifi'
                  className="aspect-[1.41] object-contain object-center w-[100px] stroke-[1px] stroke-black overflow-hidden self-center max-w-full mt-4"
                />
              </button>
             


            </div>
          </div>
        </section>
        <section>
          <div>
          {isMessFeedbackVisible && <MessFeedback />}
          {isSweeperServiceVisible && <SweeperService />}
          {isLaundryServiceVisible && <LaundryService />}
          {isWifiServiceVisible && <WifiService />}
          </div>
        </section>
      </header>
    </main>
  );
};

export default AddStudent;
