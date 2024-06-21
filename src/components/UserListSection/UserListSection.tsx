import { Divider, Grid, Typography } from "@mui/material";
import UserListItem from "../UserListItem/UserListItem";

const UserListSection = ({ userData }: any) => {
  return (
    <Grid
      container
      item
      xs={3}
      maxHeight={"90vh"}
      sx={{
        display: { xs: "none", sm: "flex" },
        borderRight: "solid rgba(255, 255, 255, 0.12) 1px",
        overflowY: "auto",
        // scrollbarColor: "#757575 hsla(210, 14%, 9%, 0.8)",
      }}
    >
      <Grid xs={12} item p={2}>
        <Typography fontWeight={700} fontSize={18}>
          Users
        </Typography>
      </Grid>
      {userData?.map((user: any) => (
        <UserListItem
          key={user.id}
          avatar={user?.avatar}
          fullName={user?.fullName}
          username={user?.username}
        />
      ))}
    </Grid>
  );
};

export default UserListSection;
