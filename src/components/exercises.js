import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Typography, Stack } from "@mui/material";
import { fetchData, exerciseOptions } from "../utils/fetchData";
import ExerciseCard from "./exercisecard";

const Exercises = ({ setExercise, bodyPart, exercises }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // console.log("Searched excercise",exercises)

  const indexOfLastExercise = currentPage * 9;
  const indexOfFirstExercise = indexOfLastExercise - 9;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1200, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      const limit = 1000;
      let exercisesData = [];

      if (bodyPart === "all") {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises?limit=${limit}`,
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=${limit}`,
          exerciseOptions
        );
      }

      setExercise(exercisesData);
    };
    fetchExercisesData();
  }, [bodyPart]);

  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" padding="20px">
      <Typography variant="h3" mb="46px">
        Showing results for
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise) => (
          <ExerciseCard key={exercise.index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItem="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            size="large"
            variant="outlined"
            count={Math.ceil(exercises.length / 9)}
            page={currentPage} //Keeps track of current page
            onChange={paginate}
          /> //runs paginate function / material ui handles parameter
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
