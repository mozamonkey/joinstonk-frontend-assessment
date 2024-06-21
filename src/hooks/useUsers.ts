import { keepPreviousData, useQuery } from "@tanstack/react-query";
import axios from "axios";
import qs from "qs";

const getUsers = async (page: number, search: string) => {
  try {
    const result = await axios.get(
      `https://665621609f970b3b36c4625e.mockapi.io/users?page=${page}&limit=10${
        search ? `&search=${search}` : ""
      }`
    );

    return result?.data;
  } catch (error: any) {
    console.log("error fetching users", error);
  }
};

const useUsers = ({
  page = 1,
  search = "",
}: {
  page: number;
  search?: string;
}) => {
  return useQuery({
    queryKey: ["users", page, ...(search ? [search] : [])],
    queryFn: () => getUsers(page, search),
    placeholderData: keepPreviousData,
  });
};

export { getUsers, useUsers };
