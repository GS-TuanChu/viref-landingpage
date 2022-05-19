import Article from 'components/article'
import Layout from 'components/layout';
const ArticleDetail = () => {
    return (
        <Layout
      mainComp={
        //  <HomePage />
        <Article />
      }
    />
    );
}

export default ArticleDetail;