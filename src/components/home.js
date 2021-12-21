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
            setArticles(response.data);
        });
    }, []);

    if (!articles) {
        return null;
    }

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
                        {articles.length}





                        <div key={articles.id} className="article-preview">
                            <div className="article-meta">
                                <a href="profile.html">
                                    <img src="http://i.imgur.com/Qr71crq.jpg" />
                                </a>
                                <div className="info">
                                    <a href="" className="author">
                                        {articles.author}
                                    </a>
                                </div>
                            </div>
                            <a href="" className="preview-link">
                            </a>
                            <div className="col-md-3">
                                <div className="sidebar">
                                    <p>Popular Tags</p>
                                    <div className="tag-list">
                                        {articles.tag}
                                    </div>
                                </div>
                            </div>
                        </div>





                    </div>
                </div>
            </div>
        </div>
    );
}
