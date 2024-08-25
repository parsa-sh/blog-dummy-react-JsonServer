import React, { useEffect, useState } from "react";
import Header from "../../component/header/Header";
import styled from "./Home.module.css";
import Articles from "../../component/articles/Articles";
import axios from "axios";
import Footer from "../../component/footer/footer";
import Loader from "./../../component/loader/Loader";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  useEffect(() => {
    setIsLoad(true);
    axios
      .get("http://localhost:8000/articles")
      .then((articles) => {
        setArticles(articles.data);
        setIsLoad(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={styled.container}>
      <Header title="Parsa Blog" />
      <h1 className={styled.h1}>لیست مقالات</h1>
      {
        (isLoad == true ? (
          <Loader />
        ) : (
          <div className={styled.ArticlesDiv}>
            {articles.map((result) => (
              <Articles
                key={result.id}
                data={result}
                link={`/Articles/${result.id}`}
              />
            ))}
          </div>
        ))
      }

      <Footer />
    </div>
  );
};

export default Home;
