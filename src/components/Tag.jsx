import React from "react";
import Badge from "react-bootstrap/Badge";

const Tag = ({tagColor = "success", tagText = "Text"}) => {
  return (
    <>
      <Badge bg={tagColor}>{tagText}</Badge>
    </>
  );
};

export default Tag;
