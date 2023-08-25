import React from "react";
import Card from "react-bootstrap/Card";
import Tag from "./Tag";

const CustomCard = ({dogName, dogImg, dogDesc, tagColor, tagText}) => {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={dogImg} />
        <Card.Body>
          <Card.Title>{dogName}</Card.Title>
          <Card.Text>{dogDesc}</Card.Text>
        </Card.Body>
        <Tag tagColor={tagColor} tagText={tagText}/>
      </Card>
    </>
  );
};

export default CustomCard;
