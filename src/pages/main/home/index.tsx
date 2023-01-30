import { dehydrate, QueryClient } from "@tanstack/react-query";
import { useCartMasterList } from "@/services/cart/master";

const Home = () => {
  const { data, isLoading } = useCartMasterList();

  if (isLoading) return <div>Loading</div>;

  console.log(data);

  return (
    <div>
      <h1> home </h1>
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
