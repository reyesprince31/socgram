import {
  useQuery,
  useMutation,
  useQueryClient,
  useInfiniteQuery,
} from "@tanstack/react-query";
import { createNewAccount } from "../appwrite/api";
import { INewUser } from "@/types";

export const useCreateUserAccount = () => {
  return useMutation({
    mutationFn: (user: INewUser) => createNewAccount(user),
  });
};
