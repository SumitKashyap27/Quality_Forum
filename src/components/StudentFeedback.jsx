import React from 'react'
import internetsy from "../assets/wifi.png";
import washing from "../assets/washing.png";
import food from "../assets/food.png";
import sweep from "../assets/sweep.png"

import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
//import EditIcon from '@mui/icons-material/Edit';
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';
import Divider from '@mui/material/Divider';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import RestaurantIcon from '@mui/icons-material/Restaurant';
//import ArchiveIcon from '@mui/icons-material/Archive';
//import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'left',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'left',
      horizontal: 'left',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

const StudentFeedback=(props)=> {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
                {/* <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/923067f0-b69b-4993-a57d-89fd5f602ca5?apiKey=64883608ff2a440e8750635888aa042e&"
                  className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
                /> */}
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
                    <div className='pt-5'>
                      <div>
                      <Button
                        id="demo-customized-button"
                        aria-controls={open ? 'demo-customized-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        variant="contained"
                        disableElevation
                        onClick={handleClick}
                        endIcon={<KeyboardArrowDownIcon />}
                        sx={{
                          backgroundColor: 'white',
                          color: 'black',            
                        }}
                      >
                        Monday
                      </Button>
                      <StyledMenu
                        id="demo-customized-menu"
                        MenuListProps={{
                          'aria-labelledby': 'demo-customized-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                      >
                      <MenuItem onClick={handleClose} disableRipple>
                        <FreeBreakfastIcon />
                        Breakfast
                      </MenuItem>
                      <Divider sx={{ my: 0.5 }} />
                      <MenuItem onClick={handleClose} disableRipple>
                        <SoupKitchenIcon />
                        Lunch
                      </MenuItem>
                      <Divider sx={{ my: 0.5 }} />
                      <MenuItem onClick={handleClose} disableRipple>
                        <LunchDiningIcon />
                        Snacks
                      </MenuItem>
                      <Divider sx={{ my: 0.5 }} />
                      <MenuItem onClick={handleClose} disableRipple>
                        <RestaurantIcon />
                        Dinner
                      </MenuItem>
                    </StyledMenu>
                  </div>
                  <div>
                      <Button
                        id="demo-customized-button"
                        aria-controls={open ? 'demo-customized-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        variant="contained"
                        disableElevation
                        onClick={handleClick}
                        endIcon={<KeyboardArrowDownIcon />}
                        sx={{
                          backgroundColor: 'white', 
                          color: 'black',            
                        }}
                      >
                        Tuesday
                      </Button>
                      <StyledMenu
                        id="demo-customized-menu"
                        MenuListProps={{
                          'aria-labelledby': 'demo-customized-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                      >
                      <MenuItem onClick={handleClose} disableRipple>
                        <FreeBreakfastIcon />
                        Breakfast
                      </MenuItem>
                      <Divider sx={{ my: 0.5 }} />
                      <MenuItem onClick={handleClose} disableRipple>
                        <SoupKitchenIcon />
                        Lunch
                      </MenuItem>
                      <Divider sx={{ my: 0.5 }} />
                      <MenuItem onClick={handleClose} disableRipple>
                        <LunchDiningIcon />
                        Snacks
                      </MenuItem>
                      <Divider sx={{ my: 0.5 }} />
                      <MenuItem onClick={handleClose} disableRipple>
                        <RestaurantIcon />
                        Dinner
                      </MenuItem>
                    </StyledMenu>
                  </div>
                  <div>
                      <Button
                        id="demo-customized-button"
                        aria-controls={open ? 'demo-customized-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        variant="contained"
                        disableElevation
                        onClick={handleClick}
                        endIcon={<KeyboardArrowDownIcon />}
                        sx={{
                          backgroundColor: 'white',  
                          color: 'black',            
                        }}
                      >
                        Wednesday
                      </Button>
                      <StyledMenu
                        id="demo-customized-menu"
                        MenuListProps={{
                          'aria-labelledby': 'demo-customized-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                      >
                      <MenuItem onClick={handleClose} disableRipple>
                        <FreeBreakfastIcon />
                        Breakfast
                      </MenuItem>
                      <Divider sx={{ my: 0.5 }} />
                      <MenuItem onClick={handleClose} disableRipple>
                        <SoupKitchenIcon />
                        Lunch
                      </MenuItem>
                      <Divider sx={{ my: 0.5 }} />
                      <Divider sx={{ my: 0.5 }} />
                      <MenuItem onClick={handleClose} disableRipple>
                        <LunchDiningIcon />
                        Snacks
                      </MenuItem>
                      <Divider sx={{ my: 0.5 }} />
                      <MenuItem onClick={handleClose} disableRipple>
                        <RestaurantIcon />
                        Dinner
                      </MenuItem>
                    </StyledMenu>
                  </div>
                  <div>
                      <Button
                        id="demo-customized-button"
                        aria-controls={open ? 'demo-customized-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        variant="contained"
                        disableElevation
                        onClick={handleClick}
                        endIcon={<KeyboardArrowDownIcon />}
                        sx={{
                          backgroundColor: 'white',  
                          color: 'black',           
                        }}
                      >
                        Thursday
                      </Button>
                      <StyledMenu
                        id="demo-customized-menu"
                        MenuListProps={{
                          'aria-labelledby': 'demo-customized-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                      >
                      <MenuItem onClick={handleClose} disableRipple>
                        <FreeBreakfastIcon />
                        Breakfast
                      </MenuItem>
                      <Divider sx={{ my: 0.5 }} />
                      <MenuItem onClick={handleClose} disableRipple>
                        <SoupKitchenIcon />
                        Lunch
                      </MenuItem>
                      <Divider sx={{ my: 0.5 }} />
                      <MenuItem onClick={handleClose} disableRipple>
                        <LunchDiningIcon/>
                        Snacks
                      </MenuItem>
                      <Divider sx={{ my: 0.5 }} />
                      <MenuItem onClick={handleClose} disableRipple>
                        <RestaurantIcon />
                        Dinner
                      </MenuItem>
                    </StyledMenu>
                  </div>
                  <div>
                      <Button
                        id="customized-button"
                        aria-controls={open ? 'customized-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        variant="contained"
                        disableElevation
                        onClick={handleClick}
                        endIcon={<KeyboardArrowDownIcon />}
                        sx={{
                          backgroundColor: 'white',
                          color: 'black',            
                        }}
                      >
                        Friday
                      </Button>
                      <StyledMenu
                        id="demo-customized-menu"
                        MenuListProps={{
                          'aria-labelledby': 'demo-customized-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                      >
                      <MenuItem onClick={handleClose} disableRipple>
                        <FreeBreakfastIcon />
                        Breakfast
                      </MenuItem>
                      <Divider sx={{ my: 0.5 }} />
                      <MenuItem onClick={handleClose} disableRipple>
                        <SoupKitchenIcon />
                        Lunch
                      </MenuItem>
                      <Divider sx={{ my: 0.5 }} />
                      <MenuItem onClick={handleClose} disableRipple>
                        <LunchDiningIcon />
                        Snacks
                      </MenuItem>
                      <Divider sx={{ my: 0.5 }} />
                      <MenuItem onClick={handleClose} disableRipple>
                        <RestaurantIcon />
                        Dinner
                      </MenuItem>
                    </StyledMenu>
                  </div>
                  <div>
                      <Button
                        id="demo-customized-button"
                        aria-controls={open ? 'demo-customized-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        variant="contained"
                        disableElevation
                        onClick={handleClick}
                        endIcon={<KeyboardArrowDownIcon />}
                        sx={{
                          backgroundColor: 'white', 
                          color: 'black',           
                        }}
                      >
                        Saturday
                      </Button>
                      <StyledMenu
                        id="demo-customized-menu"
                        MenuListProps={{
                          'aria-labelledby': 'demo-customized-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                      >
                      <MenuItem onClick={handleClose} disableRipple>
                        <FreeBreakfastIcon />
                        Breakfast
                      </MenuItem>
                      <Divider sx={{ my: 0.5 }} />
                      <MenuItem onClick={handleClose} disableRipple>
                        <SoupKitchenIcon />
                        Lunch
                      </MenuItem>
                      <Divider sx={{ my: 0.5 }} />
                      <MenuItem onClick={handleClose} disableRipple>
                        <LunchDiningIcon />
                        Snacks
                      </MenuItem>
                      <Divider sx={{ my: 0.5 }} />
                      <MenuItem onClick={handleClose} disableRipple>
                        <RestaurantIcon />
                        Dinner
                      </MenuItem>
                    </StyledMenu>
                  </div>
                  <div>
                      <Button
                        id="demo-customized-button"
                        aria-controls={open ? 'demo-customized-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        variant="contained"
                        disableElevation
                        onClick={handleClick}
                        endIcon={<KeyboardArrowDownIcon />}
                        sx={{
                          backgroundColor: 'white',
                          color: 'black',            
                        }}
                      >
                        Sunday
                      </Button>
                      <StyledMenu
                        id="demo-customized-menu"
                        MenuListProps={{
                          'aria-labelledby': 'demo-customized-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                      >
                      <MenuItem onClick={handleClose} disableRipple>
                        <FreeBreakfastIcon />
                        Breakfast 
                      </MenuItem>
                      <Divider sx={{ my: 0.5 }} />
                      <MenuItem onClick={handleClose} disableRipple>
                        <SoupKitchenIcon />
                        Lunch
                      </MenuItem>
                      
                      <Divider sx={{ my: 0.5 }} />
                      <MenuItem onClick={handleClose} disableRipple>
                        <LunchDiningIcon />
                        Snacks
                      </MenuItem>
                      <Divider sx={{ my: 0.5 }} />
                      <MenuItem onClick={handleClose} disableRipple>
                        <RestaurantIcon />
                        Dinner
                      </MenuItem>
                    </StyledMenu>
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