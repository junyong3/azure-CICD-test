import React, { useEffect } from "react";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { useMainList } from "@/services/main";

const Home = () => {
  // console.log(process.env.NEXT_PUBLIC_API_URL);
  // console.log(process.env.NODE_ENV);
  const { data, isLoading } = useMainList();

  if (isLoading) return <div>Loading</div>;

  console.log(data);

  return (
    <div>
      <h1> hello </h1>
    </div>
  );
};

export async function getStaticProps() {
  const queryClient = new QueryClient();

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Home;
