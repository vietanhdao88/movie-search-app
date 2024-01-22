import { Routes, Route } from "react-router-dom";
import Main from "./components/layout/Main";
import Banner from "./components/banner/Banner";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import { Fragment } from "react";
import DetailPage from "./pages/DetailPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main></Main>}>
          <Route
            path="/"
            element={
              <>
                <Banner></Banner>
                <HomePage></HomePage>
              </>
            }
          ></Route>
          <Route path="/movie" element={<MoviePage></MoviePage>}></Route>
          <Route
            path="/movie/:movieId"
            element={<DetailPage></DetailPage>}
          ></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
