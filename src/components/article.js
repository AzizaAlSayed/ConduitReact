export default function Article({ id, author, favorited, tag, limit, offset }) {
    return (
        <div key={id} className="article-preview">
            <div className="article-meta">
                <a href="profile.html">
                    <img src="http://i.imgur.com/Qr71crq.jpg" />
                </a>
                <div className="info">
                    <a href="" className="author">
                        {author}
                    </a>
                </div>
            </div>
            <a href="" className="preview-link">


            </a>
            <div className="col-md-3">
                <div className="sidebar">
                    <p>Popular Tags</p>
                    <div className="tag-list">
                        {tag}
                    </div>
                </div>
            </div>
        </div>
    );
}
