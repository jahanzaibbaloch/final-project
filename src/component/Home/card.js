import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText,
  CardSubtitle, CardBody
} from 'reactstrap';

const CardProduct = (props) => {
  return (props.card.map((item,index) => {
    return (<Card key={index}>
      <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
      <CardBody>
        <CardTitle>{item.title}</CardTitle>
        <CardSubtitle>{item.subtitle}</CardSubtitle>
        <CardText>{item.detail}</CardText>
        <Button color="primary">{item.button}</Button>
      </CardBody>
    </Card>)
  })
  )
};

export default CardProduct;