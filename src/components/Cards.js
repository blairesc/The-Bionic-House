import React from 'react';
import '../styles/Cards.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const cardStudies = [
    {
        id:1, 
        subtitle: "Title One",
        title: "Enter some info here",
        img: "image_1"
    },
    {
        id:2, 
        subtitle: "Title Two",
        title: "Enter some info here",
        img: "image_2"
    },
    {
        id:3, 
        subtitle: "Title Three",
        title: "Enter some info here",
        img: "image_3"
    }
];

function Cards() {
    return(
       <section className='cards'>
           <Container fluid={true}>
                <Row>
                    {cardStudies.map(cardItem => (
                        <div className='card' key={cardItem.id}>
                            <div className='card-details'>
                                <span>{cardItem.subtitle}</span>
                                 <h2>{cardItem.title}</h2>
                            </div>
                            <div className='card-image'>
                                <img 
                                    src={require(`../assets/${cardItem.img}.jpg`)}
                                    alt={cardItem.title}
                                />
                            </div>
                        </div>
                    ))}
                </Row>
           </Container>
       </section>
    );
}

export default Cards;