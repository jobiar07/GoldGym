import React, { useState } from "react";
import { Box } from "@mui/material";
import HeroBanner from "../components/hero_banner";
import SearchExercises from "../components/search_exercises";
import Exercises from "../components/exercises";
import Footer from "../components/footer";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercise] = useState([]);

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercise={setExercise}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />

      <Exercises
        setExercise={setExercise}
        bodyPart={bodyPart}
        exercises={exercises}
      />
    </Box>
  );
};

export default Home;
