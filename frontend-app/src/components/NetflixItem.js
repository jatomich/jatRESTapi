import React, { Component } from 'react';
import instance from '../axios';

import Array from 'react-bootstrap/Array';

class NetflixItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }}

  const fetchData = async () => {
    const response = await instance.get("/netflix");
    try {
      const data = await response.json();
      this.setState({ data: data });
    } catch (error) {
      console.error(error);
    }
};

  componentDidMount(); {
    instance.get('/netflix')
      .then(res => {
        // console.log(res.data);
        this.setState({ data: res.data });
      })
      .catch(err => {
        console.error(err);
      });
  }; // Add a semicolon at the end of the method declaration


  useEffect(() => {
    fetchData();
  }, []);

  render(); {
    // console.log(this.state.movies); // Move this line outside of the JSX code block
    const { data } = this.state; // Destructure movies from state
    return (
      <>
        {Array.isArray(data) && data.map((datum, index) => ( // Add check for movies array
          <li key={index}>
            <h2>{datum.title}</h2>
            <p>{datum.director}</p>
            <p>{datum.description}</p>
          </li>
        ))}
      </>
    );
  }

export default NetflixItem;


      // <div>
      //   <h1>Movies</h1>
      //   <table>
      //     <thead>
      //       <tr>
      //         <th>Title</th>
      //         <th>Director</th> {/* Changed from Director to Genre */}
      //         <th>Description</th>
      //       </tr>
      //     </thead>
      //     <tbody>
      //       {Array.isArray(movies) && movies.map((movie, index) => ( // Add check for movies array
      //         <tr key={index}>
      //           <td>{movie.title}</td>
      //           <td>{movie.title}</td>
      //           <td>{movie.director}</td>
      //         </tr>
      //       ))}
      //     </tbody>
      //   </table>
      // </div>