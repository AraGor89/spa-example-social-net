import React from "react";

const Lists = ({ items, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <ul className="list-group list-group-flush">
      {items.map((post) => (
        <li key={post.id} className="list-group-item ">
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default Lists;
