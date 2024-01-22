import MovieList from "../components/card/MovieList";

const HomePage = () => {
  return (
    <>
      <section className="pt-10 pb-5 mb-10 list-movie page-container">
        <h2 className="mb-5 text-3xl font-bold text-white capitalize">
          Now playing
        </h2>
        <MovieList type="3/movie/now_playing"></MovieList>
      </section>
      <section className="pb-5 mb-10 list-movie page-container">
        <h2 className="mb-5 text-3xl font-bold text-white capitalize">
          Top Rated
        </h2>
        <MovieList type="3/movie/top_rated"></MovieList>
      </section>
      <section className="pb-5 mb-10 list-movie page-container">
        <h2 className="mb-5 text-3xl font-bold text-white capitalize">
          Trending
        </h2>
        <MovieList type="3/trending/all/day"></MovieList>
      </section>
    </>
  );
};

export default HomePage;
