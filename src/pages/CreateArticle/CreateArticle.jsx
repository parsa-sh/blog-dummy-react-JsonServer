import React, { useState } from "react";
import Header from "./../../component/header/Header";
import styled from "./CreateArticle.module.css";
import Footer from "./../../component/footer/footer";
import ArticleInput from "../../component/articleInput/ArticleInput";
import ArticlesTextarea from "../../component/articlesTextarea/ArticlesTextarea";
import axios from "axios";
import SubmitBtn from "../../component/submitButton/SubmitBtn";

const CreateArticle = () => {
  const [inputChange, setInputChange] = useState({
    title: "",
    date: "",
    readingtime: 0,
    author: "",
    text: "",
    imageUrl :""
  });

  const changeFunctionInput = (e) => {
    setInputChange((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const changeFunctiontText = (e) => {
    setInputChange((prev) => ({
      ...prev,
      text: e.target.value,
    }));
  };
  const changeFunctionFile = (e) => {
    setInputChange((prev) => ({
      ...prev,
      imageUrl: URL.createObjectURL(e.target.files[0]),
    }));
  };

  const submitBtn = () => {
    axios.post("http://localhost:8000/articles", {
      id: 9,
      name: "Article_9",
      title: inputChange.title,
      imageUrl:inputChange.imageUrl ,
      readingtime: +inputChange.readingtime,
      date: inputChange.date,
      author: inputChange.author,
      text: inputChange.text,
    });
  };
  console.log(inputChange.imageUrl)
  return (
    <div className={styled.container}>
      <Header title="Parsa Blog" />
      <div className={styled.content}>
        <h1>ساخت مقاله</h1>
        <ArticleInput label="عنوان" name="title" change={changeFunctionInput} />
        <ArticleInput label="تاریخ" name="date" change={changeFunctionInput} />
        <ArticleInput
          label="مدت زمان خواندن"
          name="readingtime"
          change={changeFunctionInput}
        />
        <ArticleInput
          label="نویسنده"
          name="author"
          change={changeFunctionInput}
        />
        <ArticlesTextarea
          label="متن"
          name="text"
          change={changeFunctiontText}
        />
        <input type="file" onChange={changeFunctionFile} />
        <SubmitBtn label="ذخیره" change={submitBtn} />
      </div>
      <Footer />
    </div>
  );
};

export default CreateArticle;
