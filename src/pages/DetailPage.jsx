import React from "react";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../apiConfig";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import MovieItem from "../components/card/MovieItem";
const DetailPage = () => {
  const { movieId } = useParams();
  const { data } = useSWR(tmdbAPI.getMovieDetail(movieId), fetcher);
  if (!data) return null;
  console.log(data);

  const { backdrop_path, poster_path, title, genres, overview } = data;
  return (
    <>
      <div className="h-[600px] w-full relative">
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div
          className="w-full h-full bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${tmdbAPI.imgOrigin(backdrop_path)})`,
          }}
        ></div>
      </div>
      <div className="w-[800px] h-[500px] relative mx-auto -mt-[250px] mb-10">
        <img
          src={tmdbAPI.imgOrigin(poster_path)}
          alt=""
          className="object-cover w-full h-full rounded-lg "
        />
      </div>
      <h1 className="mb-10 text-2xl font-bold text-center text-white">
        {title}
      </h1>
      <div className="flex items-center justify-center mb-10 gap-x-5">
        {genres.length > 0 &&
          genres.map((item) => (
            <span
              key={item.id}
              className="px-5 py-3 text-white border border-purple-400 rounded-3xl"
            >
              {item.name}
            </span>
          ))}
      </div>
      <div className="flex max-w-[800px] mx-auto mb-10">
        <p className="leading-relaxed text-center text-white">{overview}</p>
      </div>
      <MovieCredits></MovieCredits>
      <MovieVideos></MovieVideos>
      <MoiveSimilar></MoiveSimilar>
    </>
  );
};
function MovieCredits() {
  const { movieId } = useParams();
  const { data } = useSWR(tmdbAPI.getMovieMeta(movieId, "credits"), fetcher);
  if (!data) return null;
  console.log(data);
  const cast = data.cast || [];

  return (
    <>
      <h2 className="mb-5 text-3xl font-bold text-center text-white">Cast</h2>
      <div className="grid grid-cols-4 gap-x-5 page-container">
        {cast.length > 0 &&
          cast.slice(0, 4).map((item) => (
            <div className="flex flex-col gap-x-5" key={item.id}>
              <img
                src={tmdbAPI.imgOrigin(item.profile_path)}
                alt=""
                className="h-[350px] w-full object-cover rounded-xl"
              />
              <h3 className="mt-2 font-medium text-center text-white">
                {item.name}
              </h3>
            </div>
          ))}
      </div>
    </>
  );
}
function MovieVideos() {
  const { movieId } = useParams();
  const { data } = useSWR(tmdbAPI.getMovieMeta(movieId, "videos"), fetcher);
  if (!data) return null;
  console.log(data);
  const { results } = data;
  if (!results || results.length < 0) return null;
  return (
    <div className="w-full px-5 py-10 rounded-xl">
      <h2 className="text-2xl font-bold text-center text-white">Preview</h2>
      {results.length > 0 &&
        results.slice(0, 2).map((item) => (
          <div key={item.id} className="w-full mt-10">
            <span className="px-5 py-3 mb-5 text-white bg-purple-400 rounded-lg">
              {item.name}
            </span>
            <iframe
              width={930}
              height={523}
              src={`https://www.youtube.com/embed/${item.key}`}
              title="THU CUỐI REMIX - Nhạc Remix 2023 Hay Nhất Hiện Nay - Nhạc Hot Tiktok  2023 - Nonstop Vinahouse 2023"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full mt-10 rounded-lg"
            />
          </div>
        ))}
    </div>
  );
}
function MoiveSimilar() {
  const { movieId } = useParams();
  const { data } = useSWR(tmdbAPI.getMovieMeta(movieId, "similar"), fetcher);
  if (!data) return null;
  console.log(data);
  const movies = data.results || [];
  return (
    <div className="movie-list page-container">
      <h2 className="mb-5 text-2xl font-bold text-center text-white">
        Similar Moive
      </h2>
      <Swiper grabCursor={"true"} slidesPerView={4} spaceBetween={20}>
        {movies.length > 0 &&
          movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieItem item={movie}></MovieItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
export default DetailPage;
