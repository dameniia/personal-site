import articles from "../data/articles.json";
import "../css/articles.css";

export function Articles() {
  return (
    <>
      <header className="main-header">
        <div className="page-header-inner">
          <p className="page-subtitle">Thoughts on automation &amp; engineering</p>
          <h1 className="page-title">Articles</h1>
        </div>
      </header>

      <section className="container content">
        <div className="articles-list">
          {articles.map((article) => (
            <article key={article.id} className="article-card">
              <div className="article-card-tags">
                {article.tags.map((tag) => (
                  <span key={tag} className="article-tag">{tag}</span>
                ))}
              </div>
              <h2 className="article-title">{article.title}</h2>
              <p className="article-description">{article.description}</p>
              <span className="article-coming-soon">Coming soon</span>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
