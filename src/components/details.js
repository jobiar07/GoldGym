import React from "react";
import {
  Button,
  Stack,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

const Details = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment, instructions } =
    exerciseDetail;
  console.log(Array.isArray(instructions));
  console.log("array", instructions);

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography textTransform="Capitalize" variant="h3">
          {name}
        </Typography>
        <Typography variant="h6">
          Exercises keep you strong.{" "}
          <span style={{ textTransform: "capitalize" }}>{name}</span> {""}
          is one of the best exercises to target you {target}. It will help you
          improve you mood and gain energy.
        </Typography>
        <Stack>
          <Typography variant="h5">Instructions</Typography>
          <List>
            {Array.isArray(instructions) && instructions.length > 0 ? (
              instructions.map((inst, index) => (
                <ListItem key={index}>
                  <ListItemText primary={inst} />
                </ListItem>
              ))
            ) : (
              <Typography variant="body1">1</Typography> // Fallback when no instructions
            )}
          </List>
        </Stack>

        {extraDetail.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItem="center">
            <Button
              sx={{
                background: "#fff2bd",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
                border: "none",
              }}
            >
              <img
                src={item.icon}
                alt={bodyPart}
                style={{ width: "50px", height: "50px" }}
              />
            </Button>
            <Typography textTransform="Capitalize" variant="h5" mt="30px">
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Details;
