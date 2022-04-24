import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { Article } from "../../types/article";

interface Props {
  article: Article;
}

const ArticlePage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({}) => {

  return (

  )
};

// Source the data for an article from Strapi.js
export const getStaticProps: GetStaticProps<Props> = async ({params}) => {
}

export default ArticlePage;
