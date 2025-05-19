import React from "react";
import { IBlog, IStyle } from "../../types";

interface IBlogProps {
  blog: IBlog;
  styles: IStyle;
}

const Blog: React.FC<IBlogProps> = ({ blog, styles }) => {
  const blogImageUrl = require(`../../assets/${blog.blogImage}`);
  const blogUserImageUrl = require(`../../assets/${blog.user.image}`);
  return (
    <div className={styles.blogs}>
      <div className={styles.blog}>
        <div className={styles.titleContent}>
          <h1 className={styles.title}>{blog.title}</h1>
        </div>
        <div className={styles.userBlogArticle}>
          <div className={styles.userContent}>
            <img src={blogUserImageUrl} alt="user image" />
            <div className={styles.userInfo}>
              <h3 className={styles.username}>{blog.user.username}</h3>
              <p className={styles.blogDate}>
                {blog.user.date.day} {blog.user.date.month}{" "}
                {blog.user.date.year}
              </p>
            </div>
          </div>
          <div className={styles.article}>
            <p>{blog.article}</p>
          </div>
          <button className={styles.btn}>Read More</button>
        </div>
        <div className={styles.imageContainer}>
          <img src={blogImageUrl} alt="blog image" />
        </div>
      </div>
    </div>
  );
};

export default Blog;
