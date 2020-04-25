import React from "react";

export const Like = ({ liked, onClick }) => {
  const isLike = () => {
    let classes = "fa fa-heart";
    return !liked ? (classes += "-o") : classes;
  };
  return (
    <i
      onClick={onClick}
      className={isLike()}
      aria-hidden="true"
      style={{ cursor: "pointer" }}
    />
  );
};
