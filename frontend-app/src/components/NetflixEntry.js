import React from 'react';
import Container from 'react-bootstrap/Container';

const NetflixEntry = (entry) => {
  return (
    <Container className="netflix-entry" fluid="true">
        <h2>{entry.title}</h2>
        <p>Director: {entry.director}</p>
        <p>Cast: {entry.cast.join(', ')}</p>
        <p>Rating: {entry.rating}</p>
        <p>Added: {entry.date_added}</p>
        <p>Duration: {entry.duration}</p>
        <p>Release Year: {entry.release_year}</p>
        <p>Country: {entry.country}</p>
        <p>Type: {entry.type}</p>
        <p>Genres: {entry.listed_in.join(', ')}</p>
        <p>Description: {entry.description}</p>
        {/* <p>Show ID: {entry.show_id}</p> */}
    </Container>
  );
};


export default NetflixEntry;
