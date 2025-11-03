import "./App.css";
import Applications from "./Applications";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useMemo, useState } from "react";
import { useApplications } from "./network/applications";

const PAGE_SIZE = 5;

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const { data, isLoading, isValidating, size, setSize } = useApplications(
    currentPage,
    PAGE_SIZE
  );
  const flatData = useMemo(() => data?.flatMap((page) => page), [data]);
  return (
    <div className="App">
      <Header />
      <Applications data={flatData} isLoading={isLoading} />
      <Footer
        isLoading={isValidating}
        onLoadMoreClick={() => {
          setSize(size + 1);
          setCurrentPage((prev) => prev + 1);
        }}
      />
    </div>
  );
}

export default App;
