"use client";

import { Grid, Typography } from "@mui/material";
import ChatHeader from "./ChatHeader/ChatHeader";
import ChatMessage from "../ChatMessage/ChatMessage";
import ChatInput from "../ChatInput/ChatInput";
import ChatInputSection from "../ChatInputSection/ChatInputSection";
import { useState } from "react";

export type ChatMessage = {
  avatar: string;
  senderName: string;
  content: string;
  createdAt: Date;
};

const ChatWindow = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  return (
    <Grid container item xs={12} sm={9} direction={"row"}>
      <ChatHeader />
      <Grid
        item
        xs={12}
        height={"100%"}
        maxHeight={"60vh"}
        width={"100%"}
        sx={{
          flex: 1,
          overflowY: "auto",
          // scrollbarColor: "#757575 hsla(210, 14%, 9%, 0.8)",
        }}
      >
        {messages.map((message: ChatMessage) => (
          <ChatMessage
            key={`${message.createdAt.getTime()}`}
            avatar={message?.avatar}
            senderName={message?.senderName}
            content={message?.content}
            createdAt={message?.createdAt}
          />
        ))}
      </Grid>

      <ChatInputSection setMessages={setMessages} />
    </Grid>
  );
};

export default ChatWindow;
