import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCurrentUserContext } from "../contexts/userContext";

import Article from "../components/Article";

function Articles() {
  const { token } = useCurrentUserContext();
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // recupération des articles.
    const myHeader = new Headers();
    myHeader.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
      headers: myHeader,
    };

    fetch("http://localhost:5000/api/articles", requestOptions)
      .then((response) => response.json())
      .then((articleList) => setArticles(articleList))
      .catch(() => {
        navigate("/login");
      });
  }, []);

  return (
    <div>
      <h1>Articles</h1>
      <div>
        {articles.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}

export default Articles;
