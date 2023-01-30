import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { fetchMainList } from "@/services/main";
import React from "react";

const Main = ({ mainData }: any) => {
  // const { data, isLoading } = useMainList();
  // const { data } = useQuery({ queryKey: ["main"], queryFn: fetchMainList });

  // if (isLoading) return <div>Loading</div>;
  return (
    <div>
      <h1> main</h1>
      {JSON.stringify(mainData.areaData30)}
    </div>
  );
};

export async function getStaticProps() {
  const queryClient = new QueryClient();
  const mainData = await fetchMainList();
  // await queryClient.prefetchQuery(["main"], fetchMainList);
  // return {
  //   props: {
  //     dehydratedState: dehydrate(queryClient),
  //   },
  // };
  return {
    props: {
      mainData,
    },
  };
}

export default Main;
