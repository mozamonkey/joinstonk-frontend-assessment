import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
} from "@mui/material";

const UserListItem = ({
  avatar,
  fullName,
  username,
}: {
  fullName: string;
  avatar: string;
  username: string;
}) => {
  return (
    <ListItem
      alignItems="flex-start"
      sx={{
        "&:hover": {
          backgroundColor: "rgba(255, 255, 255, 0.05)",
        },
      }}
    >
      <ListItemAvatar>
        <Avatar variant="rounded" src={avatar} />
      </ListItemAvatar>
      <ListItemText
        primary={
          <Typography
            sx={{ display: "block" }}
            component="span"
            variant="body2"
            color="text.primary"
            fontWeight={700}
          >
            {fullName}
          </Typography>
        }
        secondary={username}
      />
    </ListItem>
  );
};

export default UserListItem;
