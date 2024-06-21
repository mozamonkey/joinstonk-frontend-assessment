"use client";

import { useTheme } from "@emotion/react";
import { Divider, Grid, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ChatHeader = () => {
  return (
    <Grid item xs={12}>
      <Grid
        container
        item
        justifyContent={"space-between"}
        sx={{
          borderBottom: "solid rgba(0, 0, 0, 0.12) 1px",
          //   borderBottom: "solid rgba(255, 255, 255, 0.12) 1px",
        }}
      >
        <Grid item p={2}>
          <Grid
            container
            justifyContent={"space-between"}
            alignContent={"center"}
            alignItems={"center"}
            item
            sx={{
              cursor: "pointer",
              px: 1,
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.25)",
                borderRadius: "4px",
              },
            }}
          >
            <Grid item>
              <Typography fontWeight={700} fontSize={20}>
                #general
              </Typography>
            </Grid>
            <Grid item>
              <ExpandMoreIcon sx={{ paddingTop: 1 }} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ChatHeader;
