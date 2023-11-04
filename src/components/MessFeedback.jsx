import React, { useState } from "react";
//import StarRatings from 'react-star-ratings';
import internetsy from "../assets/wifi.png";
import washing from "../assets/washing.png";
import food from "../assets/food.png";
import sweep from "../assets/sweep.png";

import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
//import EditIcon from '@mui/icons-material/Edit';
import SoupKitchenIcon from "@mui/icons-material/SoupKitchen";
import Divider from "@mui/material/Divider";
import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const MessFeedback = () => {

  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <section className="self-center w-full mt-10 max-md:max-w-full max-md:mt-8">
  <div className="flex max-md:flex-col max-md:items-stretch max-md:gap-0">
    <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
      <form className="border shadow-sm bg-white flex grow flex-col w-full mx-auto pt-9 pb-20 px-5 rounded-xl border-solid border-black max-md:max-w-full max-md:mt-10">
        <div className="flex w-[336px] max-w-full items-start gap-5 ml-4 self-start max-md:ml-2.5">
          <div className="self-stretch flex flex-col">
            <h3 className="text-neutral-700 text-xl mb-4">GIVE RATING</h3>
            <div className="">
              <div>
              <div className="relative inline-block text-left">
              <Button
                aria-controls="dropdown-menu"
                aria-haspopup="true"
                onClick={handleOpen}
                variant="contained"
                color="primary"
                endIcon={<ExpandMoreIcon />}
                className=" mt-11 mr-3 mb-3 md:mb-0 text-white bg-blue-700 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600"
              >
                MONDAY
              </Button>
              <Menu
                id="dropdown-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                transformOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                getContentAnchorEl={null}
              >
                <MenuItem
                  onClick={handleClose}
                  className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  Dashboard
                </MenuItem>
                <MenuItem
                  onClick={handleClose}
                  className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  Profile
                </MenuItem>
                <MenuItem
                  onClick={handleClose}
                  className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  Settings
                </MenuItem>
              </Menu>
              </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
      <div className="border shadow-sm bg-white flex grow flex-col w-full mx-auto px-5 py-8 rounded-xl border-solid border-black max-md:max-w-full max-md:mt-10">
        <div className="self-center flex w-[482px] max-w-full flex-col">
          <h3 className="text-neutral-700 text-xl">Comments</h3>
          <div className="bg-zinc-300 flex w-full h-[250px] flex-col mt-7 rounded-sm self-start max-md:max-w-full" />
        </div>
      </div>
    </div>
  </div>
</section>
  )
};
export default MessFeedback;