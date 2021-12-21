import Article from "./article";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";


export default function Home() {
    const [articles, setArticles] = useState([]);
    const url = "https://api.realworld.io/api/articles";
    //?tag=programming&author=lara&favorited=lara&limit=20&offset=0
    useEffect(() => {
        axios.get(url).then((response) => {
            setArticles(response.data.articles);
        });
    }, []);

    if (!articles) {
        return null;
    }

    console.log(articles)
    return (
        <div className="home-page">
            <div className="banner">
                <div className="container">
                    <h1 className="logo-font">conduit</h1>
                    <p>A place to share your knowledge.</p>
                </div>
            </div>
            <div className="container page">
                <div className="row">
                    <div className="col-md-9">
                        <div className="feed-toggle">
                            <ul className="nav nav-pills outline-active">
                                <li className="nav-item">
                                    <a className="nav-link active" href="">
                                        Global Feed
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {articles.map((article) => (
                            <Article
                                favorited={article.favorited}
                                id={article.id}
                                key={article.id}
                                author={article.author}
                                body={article.body}
                                description={article.description}
                                tagList={article.tagList}
                                updatedAt={article.updatedAt}
                                title={article.title}
                            ></Article>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
