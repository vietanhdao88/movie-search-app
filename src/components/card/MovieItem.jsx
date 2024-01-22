import { tmdbAPI } from "../../../apiConfig";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";
const MovieItem = ({ item }) => {
  const navigate = useNavigate();
  const { poster_path, id, release_date, title, vote_average } = item;
  return (
    <div className="flex flex-col h-full p-3 text-white rounded-lg bg-slate-800">
      <img
        src={tmdbAPI.imgW500(poster_path)}
        alt=""
        className="h-[250px] object-cover w-full rounded-lg mb-5"
      />
      <h3 className="mb-2 text-lg font-bold">{title}</h3>
      <div className="flex items-center justify-between mb-4">
        <span className="mb-2">{new Date(release_date).getFullYear()}</span>
        <div className="flex items-center gap-x-2">
          <span>{vote_average}</span>
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
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
        </div>
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
  );
};

export default MovieItem;
