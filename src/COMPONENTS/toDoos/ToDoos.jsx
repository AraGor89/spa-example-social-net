import React, { useState, useEffect } from "react";
import { Preloader } from "../../common/Preloader";
import Lists from "../../common/Lists";
import { Pagination } from "../../common/pagination";

const ToDoos = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [doingsPerPage] = useState(20);
  useEffect(() => {
    if (!props.doings.length) {
      props.getToDoListThunkCreator();
    }
  }, []);
  let x;
  // Get current posts
  const indexOfLastPost = currentPage * doingsPerPage;
  const indexOfFirstPost = indexOfLastPost - doingsPerPage;
  const currentDoing = props.doings.slice(indexOfFirstPost, indexOfLastPost);

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mt-5">
      <h2 className="text-primary mb-3">Doings (with redux)</h2>
      {!props.loaded ? (
        <Preloader />
      ) : (
        <div>
          <Lists items={currentDoing} />
          <Pagination
            itemsPerPage={doingsPerPage}
            totalItems={props.doings.length}
            paginate={paginate}
          />
        </div>
      )}
    </div>
  );
};
export default ToDoos;
