import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchMovies, getGenres } from "../store";
import { firebaseAuth } from "../utils/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { styled } from "styled-components";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import NotAvailable from "../components/NotAvailable";

export default function Movies() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
  const movies = useSelector((state) => state.netflix.movies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGenres());
  }, []);
  useEffect(() => {
    if (genresLoaded) {
      dispatch(fetchMovies({ type: "movies" }));
    }
  });
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });
  return <Container>
    <div className="navbar">
        <Navbar isScrolled={isScrolled}/>

    </div>
    <div className="data">
        {
            movies.length? <Slider movies={movies}/>:<NotAvailable/>
        }
    </div>
  </Container>;
}
const Container = styled.div`
.data{
    margin-top: 8rem;
    .not-available{
        text-align: center;
        color: white;
        margin-top: 4rem;
        
    }
}`;
