import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

const AddStudent = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <main>
      <header className="bg-sky-100 bg-opacity-60 self-stretch flex flex-col mb-1 pb-24 px-5 max-md:max-w-full">
        <section className="self-center w-full mt-4 max-md:max-w-full max-md:mt-2">
          <div className="flex w-full grow flex-col flex-1 mx-auto px-3 py-6 rounded-xl max-md:mt-2 bg-white text-black">
            <h2 className="text-4xl text-center mb-4">
              Add Students
            </h2>
          </div>
        </section>
        <section>
          <div>
            <Container component="main">
              <CssBaseline />
              <Box className="mt-10 flex flex-col justify-center items-center">
                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSubmit}
                  sx={{ mt: 3 }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <Typography>Name</Typography>
                      <TextField
                        autoComplete="given-name"
                        name="Name"
                        required
                        fullWidth
                        id="Name"
                        label="Name"
                        autoFocus
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography>Father Name</Typography>
                      <TextField
                        required
                        fullWidth
                        id="fathername"
                        label="Father Name"
                        name="fathername"
                        autoComplete="family-name"
                      />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <Typography>Hostel Name</Typography>
                      <TextField
                        required
                        fullWidth
                        id="hostelname"
                        label="Hostel Name"
                        name="hostelname"
                        autoComplete="hostelname"
                      />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <Typography>Room Number</Typography>
                      <TextField
                        required
                        fullWidth
                        name="roomnumber"
                        label="Room Number"
                        id="roomnumber"
                        autoComplete="roomnumber"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography>College Id</Typography>
                      <TextField
                        required
                        fullWidth
                        name="CollegeId"
                        label="College Id"
                        id="CollegeId"
                        autoComplete="CollegeId"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography>Phone Number</Typography>
                      <TextField
                        required
                        fullWidth
                        name="phonenumber"
                        label="Phone Number"
                        id="phonenumber"
                        autoComplete="phonenumber"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography> Father Phone Number</Typography>
                      <TextField
                        required
                        fullWidth
                        name="phonenumber"
                        label=" Father Phone Number"
                        id="phonenumber"
                        autoComplete="phonenumber"
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Register
                  </Button>
                </Box>
              </Box>
            </Container>
          </div>
        </section>
      </header>
    </main>
  );
};
export default AddStudent;
