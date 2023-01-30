import Instance from "@/api/Instance";
import { useQuery } from "@tanstack/react-query";
import { API_PATH_CART } from "@/api/path/cart";
import { API_PATH_MAIN } from "@/api/path/main";

export const fetchCartList = async () => {
  const { data } = await Instance.get(API_PATH_MAIN.main);
  return data;
};

export const useCartMasterList = () => {
  return useQuery({
    queryKey: ["Cart", "List"],
    queryFn: () => fetchCartList(),
  });
};
