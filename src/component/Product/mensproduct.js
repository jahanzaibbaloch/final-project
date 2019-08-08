import React from 'react';
import {
    Card, Button, CardImg, CardTitle, CardGroup,
    CardSubtitle, CardBody
} from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

const data = [
    { title: 'Mens Product 01', subtitle: '$10', button: 'Add To Cart' },
    { title: 'Mens Product 01', subtitle: '$10', button: 'Add To Cart' },
    { title: 'Mens Product 01', subtitle: '$10', button: 'Add To Cart' }
]

class MensProduct extends React.Component {
    state = {
        data
    }
    render() {
        return (this.state.data.map(item => {
            return (
                <Container>
                    <Row>
                        <Col xs="6" sm="4">
                            <CardGroup>
                                <Card>
                                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle>{item.title}</CardTitle>
                                        <CardSubtitle>{item.subtitle}</CardSubtitle>
                                        <Button color="primary">{item.button}</Button>
                                    </CardBody>
                                </Card>
                            </CardGroup></Col>
                        <Col xs="6" sm="4">
                            <CardGroup>
                                <Card>
                                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle>{item.title}</CardTitle>
                                        <CardSubtitle>{item.subtitle}</CardSubtitle>
                                        <Button color="primary">{item.button}</Button>
                                    </CardBody>
                                </Card>
                            </CardGroup>
                        </Col>
                        <Col sm="4">
                            <CardGroup>
                                <Card>
                                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle>{item.title}</CardTitle>
                                        <CardSubtitle>{item.subtitle}</CardSubtitle>
                                        <Button color="primary">{item.button}</Button>
                                    </CardBody>
                                </Card>
                            </CardGroup>
                        </Col>
                    </Row>
                </Container>
            )
        })
        )
    };
}

export default MensProduct;