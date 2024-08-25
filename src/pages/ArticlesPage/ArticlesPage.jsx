import React, { useEffect, useState } from "react";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/footer";
import styled from "./ArticlesPage.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../../component/loader/Loader";

const ArticlesPage = () => {
  const params = useParams();
  const [ArticleState, setArticleState] = useState({});
  const [isLoad, setIsLoad] = useState(false);
  useEffect(() => {
    setIsLoad(true);
    axios
      .get(`http://localhost:8000/articles/${params.name}`)
      .then((articleResult) => {
        setArticleState(articleResult.data);
        setIsLoad(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className={styled.container}>
      <Header title="Parsa Blog" />
      {isLoad == true ? (
        <Loader />
      ) : (
        <div className={styled.content}>
          <h1>{ArticleState.title}</h1>
          <div className={styled.info}>
            <p>نویسنده : {ArticleState.author}</p>
            <p>تاریخ : {ArticleState.date}</p>
            <p>مدت زمان خواندن : {ArticleState.readingtime} دقیقه</p>
          </div>
          <img src={ArticleState.imageUrl} />
          <p>{ArticleState.text}</p>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ArticlesPage;
