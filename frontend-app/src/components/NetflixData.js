import instance from '../axios';
import React, { Component } from 'react';

class NetflixData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    instance.get('/netflix')
      .then(res => {
        // console.log(res.data);
        this.setState({ movies: res.data });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    // console.log(this.state.movies); // Move this line outside of the JSX code block
    const { movies } = this.state; // Destructure movies from state
    return (
      <div>
        <h1>Movies</h1>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Director</th> {/* Changed from Director to Genre */}
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(movies) && movies.map((movie, index) => ( // Add check for movies array
              <tr key={index}>
                <td>{movie.title}</td>
                <td>{movie.title}</td>
                <td>{movie.director}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default NetflixData;





