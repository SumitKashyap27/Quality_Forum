import React, { useState } from 'react';
import { Box, Container, Typography, Button, Rating } from '@mui/material';

const StudentFeedback = () => {
  const feedbackTypes = ['Mess Food', 'Sweeper Service', 'Internet Service', 'Laundry Service'];
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const meals = ['Breakfast', 'Lunch', 'Snacks', 'Dinner'];

  const specialBrown = '#8B4513'; // Brown color for the special case

  const [feedbackData, setFeedbackData] = useState(
    feedbackTypes.reduce((acc, feedbackType) => {
      acc[feedbackType] = {};

      days.forEach((day) => {
        acc[feedbackType][day] = {};

        if (feedbackType === 'Mess Food') {
          meals.forEach((meal) => {
            acc[feedbackType][day][meal] = 1; // Default rating is 3
          });
        }
        //look into it form this line 
        if (feedbackType === 'Sweeper Service')

        return acc;
      });

      return acc;
    }, {})
  );

  const handleRatingChange = (feedbackType, day, meal, newValue) => {
    setFeedbackData((prevData) => ({
      ...prevData,
      [feedbackType]: {
        ...prevData[feedbackType],
        [day]: {
          ...prevData[feedbackType][day],
          [meal]: newValue,
        },
      },
    }));
  };

  const handleSubmit = () => {
    // Handle the submission of feedback here
    // You can access the feedbackData object with ratings for each feedback type, day, and meal
    console.log('Feedback Data:', feedbackData);
  };

  return (
    <Container maxWidth="sm">
      <Box className="mt-5">
        <Typography variant="h4" component="h2" align="center">
          Feedback
        </Typography>
        {feedbackTypes.map((feedbackType, index) => (
          <div key={index}>
            <Typography variant="h6" component="h3" className="mt-5">
              {feedbackType} Ratings
            </Typography>
            {days.map((day, dayIndex) => (
              <div key={dayIndex}>
                <Typography variant="h6" component="h3" className="mt-2">
                  {day}
                </Typography>
                {feedbackType === 'Mess Food' &&
                  meals.map((meal, mealIndex) => (
                    <div key={mealIndex}>
                      <Typography variant="h6" component="h3" className="mt-2">
                        {meal}
                      </Typography>
                      <Rating
                        name={`${feedbackType}-${day}-${meal}-rating`}
                        value={feedbackData[feedbackType][day][meal]}
                        precision={1}
                        onChange={(_, newValue) => handleRatingChange(feedbackType, day, meal, newValue)}
                        style={{ color: specialBrown }}
                      />
                    </div>
                  ))}
              </div>
            ))}
          </div>
        ))}
        <Button variant="contained" className="mt-5" color="primary" onClick={handleSubmit}>
          Submit Feedback
        </Button>
      </Box>
    </Container>
  );
};

export default StudentFeedback;
