import Blog from "components/blog";
import Layout from "components/layout";
const Blogs = () => {
  return (
    <Layout
      mainComp={
        //  <HomePage />
        <Blog />
      }
    />
  );
};

export default Blogs;
