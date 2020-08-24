import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import Form from './components/Form';
import PicList from './components/PicList';

function App() {

  const [search, setSearch] = useState('');
  const [images, setImages] = useState([])

  useEffect(() => {
    const getApiRequest = async () => {
      if(search === '') return;
      const picsPerPage = 30;
      const apiKey = '';
      const url = `https://pixabay.com/api/?key=${apiKey}&q=${search}&per_page=${picsPerPage}`;
  
      const response = await axios(url);
      setImages(response.data.hits)
    }
    getApiRequest()

  }, [search])

  return (
    <Fragment>
      <div className="container">
        <div className="jumbotron">
          <p className="lead text-center">
            Buscador de Imágenes
          </p>
          <Form 
            setSearch={setSearch}
          />
        </div>
        <div className="row justify-content-center">
          <PicList images={images}/>
        </div>
    </div>
    </Fragment>
  );
}

export default App;
