import Header from "../Components/Header/Header";
import Search from "../Components/Search/Search";
import Quicksearch from "../Components/Quicksearch/Quicksearch.1";

function Homepage() {
  return (
    <>
      <Header bgColor="bg-white" />
      <Search />
      <Quicksearch />
    </>
  );
}

export default Homepage;
