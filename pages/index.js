import { server } from "../config";
import ArticleList from "../components/ArticleList";
import articleStyles from "../styles/Article.module.css";
import Meta from "../components/Meta";

export default function Home({ articles }) {
  return (
    <div>
      <Meta />
      <div className={articleStyles.grid}>
        {articles.map((article) => (
          <ArticleList key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();
  return {
    props: { articles },
  };
};
