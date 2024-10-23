import React from "react";
import { Stack, Box, Typography } from "@mui/material";

const Exercisevideos = ({ exerciseVideos, name }) => {
  return (
    <Box sx={{ marginTop: { lg: "50px", xs: "20px" } }} padding="20px">
      <Typography variant="h4" mb="33px">
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "110px", xs: "px" } }}
      >
        {exerciseVideos?.slice(0, 9).map(
          (
            item,
            index //checks if the video exist / output 3 vids or nothing / iterates through each one
          ) => (
            <Box sx={{ mb: { lg: "-100px", xs: "50px" } }}>
              <a
                key={index} //need a key for each video when iterating
                className="exercise-video" //apply a class to each video
                href={`https://www.youtube.com/watch?v=${item.video.videoId}`} //dynamic link to the video
                target="_blank" //opens the video in a new tab
                rel="noreferrer" //security measure
              >
                <img
                  style={{ borderRadius: "10px", border: "solid black 2px" }} //rounds the corners of the image
                  src={item.video.thumbnails[0].url}
                  alt={item.video.title}
                />{" "}
                {/* //display the video thumbnail as a link image */}
                <Box>
                  <Typography
                    sx={{ fontSize: { lg: "1.5rem", xs: "1.3rem" } }} // Adjust sizes as needed
                    textAlign="left"
                    color="black"
                  >
                    {item.video.title}
                  </Typography>
                  <Stack direction="row" spacing={3} alignItems="center">
                    <Typography variant="h9" color="black">
                      {item.video.viewCountText}
                    </Typography>
                    <Typography variant="h9" color="black">
                      {item.video.lengthText}
                    </Typography>
                    <Typography variant="h9" color="black">
                      by {item.video.channelName}
                    </Typography>
                  </Stack>

                  {/* <Typography variant="h7" textAlign="left" color="black">
                  {item.video.channelName}
                  {"      "}
                  {item.video.publishedTimeText}
                  {"       "} {item.video.lengthText}
                </Typography> */}
                </Box>
              </a>
            </Box>
          )
        )}
      </Stack>
    </Box>
  );
};

export default Exercisevideos;
