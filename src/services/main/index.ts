import Instance from "@/api/Instance";
import { API_PATH_MAIN } from "@/api/path/main";
import { useQuery } from "@tanstack/react-query";

export const fetchMainList = async () => {
  const { data } = await Instance.get(
    "https://m.choroc.com/api/v1/" + API_PATH_MAIN.main,
  );
  return data;
};

export const fetchMainListClient = async () => {
  const { data } = await Instance.get(API_PATH_MAIN.main);
  return data;
};

export const useMainList = () => {
  return useQuery({
    queryKey: ["main"],
    queryFn: () => fetchMainList(),
  });
};
