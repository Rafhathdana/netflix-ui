import React from "react";
import CardSlider from "./CardSlider";

export default React.memo(function Slider({ completeMovies, tvsw = false }) {
  const getMoviesFromRange = (from, to) => {
    return completeMovies.slice(from, to);
  };
  return (
    <div>
      <CardSlider
        title={tvsw ? "Trending TV Shows" : "Trending Movies"}
        data={getMoviesFromRange(0, 10)}
      />
      <CardSlider title="New Releases" data={getMoviesFromRange(10, 20)} />
      <CardSlider
        title={tvsw ? "Blockbuster TV Shows" : "Blockbuster Movies"}
        data={getMoviesFromRange(20, 30)}
      />
      <CardSlider
        title="Popular On Netflix"
        data={getMoviesFromRange(30, 40)}
      />
      <CardSlider
        title={tvsw ? "Action TV Shows" : "Action Movies"}
        data={getMoviesFromRange(40, 50)}
      />
      <CardSlider title="Epics" data={getMoviesFromRange(50, 60)} />
    </div>
  );
});
