export default function Article({ id, author, updatedAt, tagList, description, body, title }) {
    return (
        <div key={id} className="article-preview">
            <div className="article-meta">
                <a href="profile.html">
                    <img src={author.username.image} />
                </a>
                <div className="info">
                    <a href="" className="author">
                        {author.username}
                    </a>
                    <span class="date">{updatedAt}</span>
                </div>
            </div>
            <a href="" className="preview-link">
                <h1>{title}</h1>
                <p>{description}</p>
                <span>{body}</span>
            </a>
            <div className="col-md-3">
                <div className="sidebar">
                    <p>Popular Tags</p>
                    <div className="tag-list">
                        {tagList.join(" ")}
                    </div>
                </div>
            </div>
        </div>
    );
}
