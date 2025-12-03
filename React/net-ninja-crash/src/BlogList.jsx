const BlogList = () => {
  return (
    <div className="blog-list">
      {bolgs.map((blog) => {
        return (
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written By {blog.author}</p>
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
