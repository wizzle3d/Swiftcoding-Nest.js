import { articles } from "../../../data";

export default function handler(req, res) {
  const id = req.query.id;
  const article = articles.filter((article) => article.id === id);

  if (article.length > 0) {
    return res.status(200).json(article[0]);
  } else {
    res.status(404).json({ message: "Article not found" });
  }
}
