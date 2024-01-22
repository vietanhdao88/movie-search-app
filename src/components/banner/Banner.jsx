import useSWR from "swr";
import { tmdbAPI, fetcher } from "../../../apiConfig";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";
const Banner = () => {
  const { data } = useSWR(tmdbAPI.getMovieList("3/movie/upcoming"), fetcher);

  if (!data) return null;
  console.log(data);
  const movies = data?.results || [];
  console.log(movies.length);
  return (
    <>
      <div className="h-[700px] page-container banner mb-10">
        <Swiper grabCursor={"true"} slidesPerView={1}>
          {movies.length > 0 &&
            movies.map((movie) => (
              <SwiperSlide key={movie.id}>
                <BannerItem item={movie}></BannerItem>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
};
function BannerItem({ item }) {
  const { backdrop_path, title, id } = item;
  const navigate = useNavigate();
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 bg-black bg-opacity-25 overlay"></div>
      <img
        src={tmdbAPI.imgOrigin(backdrop_path)}
        alt=""
        className="object-cover w-full h-full rounded-lg"
      />
      <div className="absolute text-white bottom-5 left-5">
        <h3 className="mb-5 text-3xl font-bold">{title}</h3>
        <div className="flex items-center justify-center mb-5 gap-x-5">
          <span className="px-5 py-3 border border-white rounded-lg">
            Action
          </span>
          <span className="px-5 py-3 border border-white rounded-lg">
            Action
          </span>
          <span className="px-5 py-3 border border-white rounded-lg">
            Action
          </span>
        </div>
        <Button onClick={() => navigate(`/movie/${id}`)}>
          <span>Watch Now</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
            />
          </svg>
        </Button>
      </div>
      <div className="absolute left-2/4 -translate-x-2/4 translate-y-2/4">
        <img src="" alt="" />
      </div>
    </div>
  );
}
export default Banner;
