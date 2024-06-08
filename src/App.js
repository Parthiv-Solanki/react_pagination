import logo from "./logo.svg";
import "./App.css";
import { Data } from "./data";
import { useEffect, useState } from "react";

function App() {
  // ======================Pagination==============================
  // const [currentPage, setCurrentPage] = useState(1);

  // let recordPerPage = 12;
  // let lastIndex = currentPage * recordPerPage;
  // let firstIndex = lastIndex - recordPerPage;
  // const records = Data.slice(firstIndex, lastIndex);
  // const pages = Math.ceil(Data.length / recordPerPage);
  // const numbers = [...Array(pages + 1).keys()].slice(1);

  // ========================Infinite scroll=========================
  const [page, setPage] = useState(1);
  const [records, setRecords] = useState([]);
  let recordPerPage = 9;

  const loadMoreData = () => {
    const lastIndex = page * recordPerPage;
    const firstIndex = lastIndex - recordPerPage;
    const newRecords = Data.slice(firstIndex, lastIndex);
    setRecords((prevRecords) => [...prevRecords, ...newRecords]);
  };

  const handleScroll = () => {
    // console.log(
    //   "document.documentElement.scrollHeight",
    //   document.documentElement.scrollHeight
    // );
    // console.log(
    //   "document.documentElement.scrollTop",
    //   document.documentElement.scrollTop
    // );
    // console.log("innerHeight", window.innerHeight);

    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setPage((prev) => prev + 1);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    loadMoreData();
  }, [page]);

  console.log("records-->", records);
  return (
    // ======================Pagination==============================
    // <div className="App">
    // <section className="text-gray-600 body-font">
    //   <div className="container px-5 py-24 mx-auto">
    //     <div className="flex flex-wrap -m-2">
    //       {records.map((item, index) => {
    //         return (
    //           <div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={index}>
    //             <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
    //               <div className="flex-grow">
    //                 <h2 className="text-gray-900 title-font font-medium">
    //                   {item.id}
    //                 </h2>
    //                 <h2 className="text-gray-900 title-font font-medium">
    //                   {item.title}
    //                 </h2>
    //                 <p className="text-gray-500">{item.body}</p>
    //               </div>
    //             </div>
    //           </div>
    //         );
    //       })}
    //     </div>
    //     <div className="flex justify-between">
    //       <button
    //         onClick={() => {
    //           if (currentPage > 1) {
    //             setCurrentPage(currentPage - 1);
    //           }
    //         }}
    //         disabled={currentPage === 1}
    //       >
    //         Previous
    //       </button>
    //       <div className="flex justify-between">
    //         {numbers.map((number) => {
    //           return (
    //             <div
    //               className={`p-4 border-2 mx-1 border-black ${
    //                 currentPage === number ? "bg-sky-400" : ""
    //               }`}
    //               onClick={() => setCurrentPage(number)}
    //             >
    //               {number}
    //             </div>
    //           );
    //         })}
    //       </div>
    //       <button
    //         onClick={() => {
    //           if (currentPage <= pages) {
    //             setCurrentPage(currentPage + 1);
    //           }
    //         }}
    //         disabled={currentPage === pages}
    //       >
    //         Next
    //       </button>
    //     </div>
    //   </div>
    // </section>
    // </div>

    // ========================Infinite scroll=========================
    <div className="App">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-2">
            {records.map((item, index) => {
              return (
                <div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={index}>
                  <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                    <div className="flex-grow">
                      <h2 className="text-gray-900 title-font font-medium">
                        {item.id}
                      </h2>
                      <h2 className="text-gray-900 title-font font-medium">
                        {item.title}
                      </h2>
                      <p className="text-gray-500">{item.body}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
