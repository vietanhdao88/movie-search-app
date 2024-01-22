import React, { useEffect, useState } from "react";
import useSWR from "swr";
import ReactPaginate from "react-paginate";
import { fetcher, tmdbAPI } from "../../apiConfig";
import MovieItem from "../components/card/MovieItem";

const itemsPerPage = 20;
const MoviePage = () => {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const [nextPage, setNextPage] = useState(1);
  console.log(nextPage);
  const [url, setUrl] = useState(tmdbAPI.getMovieList("3/movie/popular"));
  const { data } = useSWR(url, fetcher);
  console.log(data);
  useEffect(() => {
    setUrl(tmdbAPI.getMovieList("3/movie/top_rated", nextPage));
  }, [nextPage]);
  // useEffect(() => {
  //   setUrl(tmdbAPI.getMovieList("3/movie/top_rated", nextPage));
  // }, [nextPage]);

  useEffect(() => {
    if (!data || !data.total_results) return;
    setPageCount(Math.ceil(data.total_results / itemsPerPage));
  }, [data, itemOffset]);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.total_results;
    setItemOffset(newOffset);
    setNextPage(event.selected + 1);
    console.log(event.selected + 1);
  };

  // const { page, total_pages } = data;
  const movies = data?.results || [];

  return (
    <>
      <div className="grid grid-cols-4 gap-5 page-container">
        {movies.map((movie) => (
          <MovieItem key={movie.id} item={movie}></MovieItem>
        ))}
      </div>
      <div className="justify-center mx-auto flex-items-center">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          className="flex items-center justify-center mt-5 text-white pagination gap-x-5"
        />
      </div>
    </>
  );
};

export default MoviePage;
