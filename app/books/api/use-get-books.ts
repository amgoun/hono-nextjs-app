import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/hono-client";

export const useGetBooks = () => {
  const query = useQuery({
    queryKey: ["books"],
    queryFn: async () => {
      const res = await client.api.books.$get();

      if (!res.ok) {
        throw Error("faild to fetch books");
      }
      const data = await res.json();
      return data;
    },
  });
  return query;
};
