import MovieCard from "./MovieCard";
import styled from "styled-components";
import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../../redux/modules/movies";

const MovieListCard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, error, movies } = useSelector((state) => state.movies);
  console.log(movies);
  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩 중....</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <Container>
      <Movielist>
        <Listheader>
          <h3>무비차트</h3>
        </Listheader>
        <Headercheckbox>
          <input type="checkbox"></input>
          <p>현재 상영작만 보기</p>
        </Headercheckbox>
        <Moviecardlist>
          {movies.map((movie) => (
            <MovieCard />
          ))}
        </Moviecardlist>
      </Movielist>
    </Container>
  );
};

export default MovieListCard;

const Container = styled.div`
  width: 100%;
  width: 1040px; //헤더랑 통일
  margin: 30px auto; //헤더랑 콘텐트 띄우기겸
`;
const Movielist = styled.div`
  width: 980px;
  margin: 0 auto;
`;
const Listheader = styled.div`
  width: 100%;
  height: 60px;
  font-weight: 500;
  border-bottom: 3px solid #241d1e;
  h3 {
    font-size: 36px;
    color: #222;
  }
`;
const Moviecardlist = styled.div`
  width: 980px;
  display: flex;
  flex-direction: row;
  margin: 50px auto;
  flex-wrap: wrap;
`;
const Headercheckbox = styled.div`
  display: flex;
  font-size: 13px;
  margin: 15px;
  color: #424141;
`;
