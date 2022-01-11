import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import { Context } from "../../context/Context";
import Spinner from "../../components/Spinner";
import PostItem from "../../components/PostItem";
import { FaEllipsisH, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./postsection.css";

const PostSection = () => {
  const [posts, setPosts] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const { apiURL, user } = useContext(Context);
  const location = useLocation();
  const searchPath = [];
  const { search } = useLocation();
  let title = "Publicacioness";
  searchPath.push(location.search.split("=")[0]);
  searchPath.push(location.search.split("=")[1]);

  if (searchPath[0] === "?user") {
    const usersearch = searchPath[1].replace("%20", " ")
    title = `Publicaciones de ' ${capitalizeFirstLetters(usersearch)} ' `;
  }

  if (searchPath[0] === "?cat") {
    title = `Publicaciones en la categoria "${searchPath[1]}" `;
  }

  user && searchPath[1] === user.username && (title = "Mis publicaciones");

  const [currentPage, setCurrentPage] = useState(1);

  const [itemsPerPage] = useState(4);

  const pages = [];

  for (let i = 1; i <= Math.ceil(posts.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = posts.slice(indexOfFirstItem, indexOfLastItem);

  const [pageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const handleClick = (e) => {
    setCurrentPage(Number(e.target.id));
  };

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <button
          className={number === currentPage ? "pgn__btn-aa " : "pgn__btn-number "}
          style={{
            border: number === currentPage && "4px solid var(--text-color)",
          }}
          title={`Page ${number}`}
          key={number}
          id={number}
          onClick={handleClick}
        >
          {number}
        </button>
      );
    } else {
      return null;
    }
  });

  const handleNextbtn = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;

  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = (
      <button type="button" className="pgn__btn-number" onClick={handleNextbtn}>
        <FaEllipsisH />
      </button>
    );
  }

  let pageDecrementBtn = null;

  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = (
      <button type="button" className="pgn__btn-number" onClick={handlePrevbtn}>
        <FaEllipsisH />
      </button>
    );
  }

  useEffect(() => {
    setIsLoading(true);

    const fetchPosts = async () => {
      const res = await axios.get(apiURL + "/posts/" + search);
      setPosts(res.data);

      setIsLoading(false);
    };
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);




  function capitalizeFirstLetters(str){
    return str.toLowerCase().replace(/^\w|\s\w/g, function (letter) {
        return letter.toUpperCase();
    })
  }


  
  return (
    <section className="post__container container" id="products">
      <h2 className="post__section-title section__title">{title}</h2>

      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="posts__content grid">
            {currentItems.map((post) => (
              <PostItem key={post._id} post={post} />
            ))}
          </div>

          <div className="pagination__content">
            <button
              title="previous"
              type="button"
              className={
                currentPage === pages[0]
                  ? "hidden"
                  : "pgn__btn-next"
              }
              onClick={handlePrevbtn}
              disabled={currentPage === pages[0] ? true : false}
            >
              <FaChevronLeft className="text-sm" />
            </button>

            {pageDecrementBtn}
            {renderPageNumbers}
            {pageIncrementBtn}

            <button
              title="next"
              type="button"
              className={
                currentPage === pages[pages.length - 1]
                  ? "hidden"
                  : "pgn__btn-pre "
              }
              onClick={handleNextbtn}
              disabled={currentPage === pages[pages.length - 1] ? true : false}
            >
              <FaChevronRight className="text-sm" />
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default PostSection;
