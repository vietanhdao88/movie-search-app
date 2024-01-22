import React from "react";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../../apiConfig";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieItem from "./MovieItem";
import "swiper/css";
const MovieList = ({ type }) => {
  const { data } = useSWR(tmdbAPI.getMovieList(type), fetcher);
  if (!data) return null;
  const movies = data.results || [];
  return (
    <div className="movie-list">
      <Swiper grabCursor={"true"} slidesPerView={4} spaceBetween={10}>
        {movies.length > 0 &&
          movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieItem item={movie}></MovieItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
