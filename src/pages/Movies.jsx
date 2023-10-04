import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, getGenres } from "../store";
import { firebaseAuth } from "../utils/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { styled } from "styled-components";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import NotAvailable from "../components/NotAvailable";
import SelectGenre from "../components/SelectGenre";

export default function Movies() {
  const [isScrolled, setIsScrolled] = useState(false);
  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
  const completeMovies = useSelector((state) => state.netflix.movies);
  const genres = useSelector((state) => state.netflix.genres);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  useEffect(() => {
    if (genresLoaded) dispatch(fetchMovies({ type: "movie" }));
  }, [genresLoaded, dispatch]);

  useEffect(() => {
    window.onscroll = () => {
      setIsScrolled(window.pageYOffset === 0 ? false : true);
    };

    return () => {
      window.onscroll = null;
    };
  }, []);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      // if (currentUser) navigate("/");
    });
  }, []);

  return (
    <Container>
      <div className="navbar">
        <Navbar isScrolled={isScrolled} />
      </div>
      <div className="data">
        <SelectGenre genres={genres} type="movie" />
        {completeMovies.length ? (
          <Slider completeMovies={completeMovies} />
        ) : (
          <NotAvailable />
        )}
      </div>
      `1`
    </Container>
  );
}

const Container = styled.div`
  .data {
    margin-top: 8rem;
    .not-available {
      text-align: center;
      color: white;
      margin-top: 4rem;
    }
  }
`;
