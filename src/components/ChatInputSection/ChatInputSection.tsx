"use client";
import { Button, Grid } from "@mui/material";
import ChatInput from "../ChatInput/ChatInput";
import { Dispatch, SetStateAction, useCallback, useState } from "react";
import emojis from "../../utils/emojis.json";
import { ChatMessage } from "../ChatWindowSection/ChatWindowSection";
import { getUsers, useUsers } from "@/hooks/useUsers";

import debounce from "lodash.debounce";
const ChatInputSection = ({
  setMessages,
}: {
  setMessages: Dispatch<SetStateAction<ChatMessage[]>>;
}) => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");

  // const mappedUsers = data?.map((user: any) => ({
  //   ...user,
  //   display: `${user.fullName}`,
  // }));

  const commands = [
    {
      id: "mute",
      display: "/mute",
      description: "Mute a given user",
    },
    {
      id: "ban",
      display: "/ban",
      description: "Ban a given user",
    },
    {
      id: "title",
      display: "/title",
      description: "Set a title for the current stream",
    },
    {
      id: "description",
      display: "/description",
      description: "set a description for the current stream",
    },
  ];

  const queryEmojis = (query: any, callback: any) => {
    if (query.length === 0) return;

    const matches = emojis
      .filter((emoji) => {
        return emoji.shortname.indexOf(query.toLowerCase()) > -1;
      })
      .slice(0, 10);
    return matches.map((emojiEntry) => ({
      id: emojiEntry.emoji,
      shortname: emojiEntry.shortname,
      display: emojiEntry.emoji,
    }));
  };

  const handleSubmit = () => {
    const newChatMessage: ChatMessage = {
      senderName: "Jacob Doe",
      avatar: "https://randomuser.me/api/portraits/men/41.jpg",
      content: value,
      createdAt: new Date(),
    };
    setMessages((prev) => [...prev, newChatMessage]);
    setValue("");
  };

  const queryUsers = useCallback(
    debounce(async (query: any, callback: any) => {
      setLoading(true);
      try {
        const data = await getUsers(1, query);
        const mappedUsers = data?.map((user: any) => ({
          ...user,
          display: `@${user.fullName}`,
        }));

        callback(mappedUsers);
      } catch (error) {
        console.log("error while searching for users", error);
      } finally {
        setLoading(false);
      }
    }, 500),
    []
  );

  return (
    <Grid item xs={12}>
      <Grid container item p={2}>
        <Grid item xs={12}>
          <ChatInput
            forceSuggestionsAboveCursor
            isLoading={false}
            userSuggestions={queryUsers}
            emojiSuggestions={queryEmojis}
            commandSuggestions={commands}
            value={value}
            onChange={setValue}
            placeholder="Send a message"
            appendSpaceOnAdd
            onSubmit={handleSubmit}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ChatInputSection;
