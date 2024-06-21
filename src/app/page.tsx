import Image from "next/image";
import styles from "./page.module.css";
import { Grid, TextField } from "@mui/material";
import Dashboard from "@/pages/Dashboard";
import { getUsers } from "@/hooks/useUsers";
import { QueryClient, dehydrate } from "@tanstack/query-core";
import { HydrationBoundary } from "@tanstack/react-query";

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(1, ""),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Dashboard />
    </HydrationBoundary>
  );
}
