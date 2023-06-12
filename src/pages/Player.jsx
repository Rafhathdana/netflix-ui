import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import styled from "styled-components";
import video from "../assets/video.mkv";
import { useNavigate } from "react-router-dom";
export default function Player() {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="player">
        <div className="back">
          <BsArrowLeft onClick={() => navigate(-1)} />
        </div>
        <video src={video} autoPlay loop controls muted></video>
      </div>
    </Container>
  );
}
const Container = styled.div`
.player{
    width: 100vw;
    height: 100vh;
    .back {
        position: absolute;
        padding: 2rem;
        z-index:1;
        svg {
            font-size: 3rem;
            cursor: pointer;
        }
    }
    video{
        height: 100%;
        width: 100%;
        object-fit:cover;
    }
}


`;
