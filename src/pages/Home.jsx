import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Button from "@mui/material/Button";
import NoticiasCard from "../components/NoticiasCard";
import Dog from "../assets/images/dog.gif";
import imageDefault from "../assets/images/imageDefault.webp";
import Layout from "../components/Layout";
/* import API_KEY from '../config' */
const API_KEY = process.env.REACT_APP_API_KEY 
async function getNoticias() {
  var url =
    `https://gnews.io/api/v4/search?q=economia OR espectaculo OR politica&lang=es&apikey=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error("Error al obtener noticias:", error);
    return [];
  }
}

const Home = () => {
  const [selectedNews, setSelectedNews] = useState(null);
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNoticias().then((response) => {
      setNews(response);
    });
  }, []);

  const LeerClick = (index) => {
    const selected = news[index];
    setSelectedNews(selected);
  };

  const RegresarClick = () => {
    setSelectedNews(null);
  };

  function noticiasView() {
    if (selectedNews) {
      return (
        <div className="h-screen bg-dark">
          <div className="bg-cover">
            {selectedNews.image ? (
              <img
                className="w-full h-auto lg:h-96 md:h-96 object-cover"
                style={{ objectPosition: "50% 25%" }}
                src={selectedNews.image}
                alt=""
              />
            ) : (
              <img
                className="w-full h-auto lg:h-96 md:h-96 object-cover object-center"
                src={imageDefault}
                alt=""
              />
            )}
          </div>
          <h2 className="text-white text-2xl font-bold my-4">{selectedNews.title}</h2>
          <p className="text-lg text-white mb-4">
            {selectedNews.description}
          </p>
          <div className="space-x-4">
            <a
              href={selectedNews.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="contained" color="primary">
                Leer más
              </Button>
            </a>
            <Button
              variant="contained"
              color="secondary"
              onClick={RegresarClick}
            >
              Regresar
            </Button>
          </div>
        </div>
      );
    } else if (news?.length > 0) {
      return (
        <div className="bg-dark flex flex-col sm:flex-row sm:flex-wrap justify-center">
          {news.map((item, index) => (
            <div key={index} className="m-8">
              <NoticiasCard
                urlToImage={item.image}
                title={item.title}
                description={item.description}
                publishedAt={item.publishedAt}
                onLeerClick={() => LeerClick(index)}
              ></NoticiasCard>
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div className="flex justify-center items-center h-screen bg-dark">
          <div className="flex flex-col items-center">
            <h1>No hay noticias interesantes</h1>
            <img src={Dog} className="rounded-xl w-48" />
          </div>
        </div>
      );
    }
  }

  return(
    <Layout>
      <Helmet>
        <title>JohnNews</title>
      </Helmet>
      {noticiasView()}
      </Layout>
    ); 
};

export default Home;
