import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import moment from "moment";
import reactStringReplace from "react-string-replace";

const ChatMessage = ({
  avatar,
  senderName,
  createdAt,
  content,
}: {
  avatar: string;
  senderName: string;
  createdAt: Date;
  content: string;
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
            {senderName}{" "}
            <Typography
              component={"span"}
              variant="caption"
              paddingLeft={"4px"}
              color="text.secondary"
            >
              {moment(createdAt).format("hh:mm A")}
            </Typography>
          </Typography>
        }
        secondary={
          <Typography
            sx={{ display: "inline" }}
            component="span"
            variant="body2"
            color="text.primary"
          >
            {reactStringReplace(content, /@\[(.*?)]\(.*?\)/g, (match, i) => (
              <Typography
                component={"span"}
                variant="body2"
                sx={{
                  color: "rgb(29, 155, 240)",
                }}
                key={i}
              >
                {match}
              </Typography>
            ))}
          </Typography>
        }
      />
    </ListItem>
  );
};

export default ChatMessage;
