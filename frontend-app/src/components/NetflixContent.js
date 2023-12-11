import React, { useState, useEffect } from 'react';
import NetflixEntry from './NetflixEntry';
import instance from '../axios'; 


function NetflixContent() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await instance.get('/netflix');
      setData(response.data);
    };
    fetchData();
  }, []);

  
  return (
    <div className="netflix-content">
      {data.content.map((details) => (
        <NetflixEntry key={details.show_id} entry={details} />
      ))}
    </div>
  );
};

export default NetflixContent;
