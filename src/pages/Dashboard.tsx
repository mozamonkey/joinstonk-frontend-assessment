"use client";

import ChatWindow from "@/components/ChatWindowSection/ChatWindowSection";
import UserListSection from "@/components/UserListSection/UserListSection";
import { getUsers, useUsers } from "@/hooks/useUsers";
import { Divider, Grid, TextField, Typography } from "@mui/material";
import { QueryClient } from "@tanstack/query-core";

const Dashboard = () => {
  const { data } = useUsers({ page: 1, search: "" });

  return (
    <Grid container item height="100%">
      <UserListSection userData={data} />
      <ChatWindow />
    </Grid>
  );
};

export default Dashboard;
