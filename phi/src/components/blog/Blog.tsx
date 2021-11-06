import * as React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import ThemeContext from "../../utils/ThemeContext";
import BlogPosts from "../blogPosts/BlogPosts";
import BlogSidebar from "../blogSidebar/BlogSidebar";
import { BlogProps } from "./BlogProps";

const { useContext } = React;

function Blog({ posts }: BlogProps) {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Jumbotron fluid className={`bg-${theme}`}>
        <Container className={`text-center`}>
          <h1>
            <strong>My Blog</strong>
          </h1>
          <p>Read my latest posts.</p>
        </Container>
      </Jumbotron>
      <Container className={`my-3`}>
        <Row>
          <Col lg={8} sm={12}>
            <BlogPosts posts={posts} />
          </Col>
          <Col lg={4} sm={12}>
            <BlogSidebar />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Blog;
