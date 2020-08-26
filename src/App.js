import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import Form from './components/Form';
import PicList from './components/PicList';

function App() {

  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const getApiRequest = async () => {
      if(search === '') return;
      const picsPerPage = 30;
      const apiKey = '9057020-4f4f60632527416e2038256a1';
      const url = `https://pixabay.com/api/?key=${apiKey}&q=${search}&per_page=${picsPerPage}&page=${currentPage}`;
  
      const response = await axios(url);
      setImages(response.data.hits)
      //total pages
      const calcTotalPages = Math.ceil(response.data.totalHits/picsPerPage);
      setTotalPages(calcTotalPages)
      //return to the top
      setTimeout(() => {
        const jumbotron = document.querySelector('.jumbotron');
        jumbotron.scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'end'})
      }, 1000);
    }
    getApiRequest()


  }, [search, currentPage]);

  //PrePage
  const prePage = () => {
    const newCurrentPage = currentPage - 1;
    if (newCurrentPage === 0) return;

    setCurrentPage(newCurrentPage)
    console.log(newCurrentPage)
  }

  //PostPage
  const postPage = () => {
    const newCurrentPage = currentPage + 1;
    if (newCurrentPage > totalPages) return;
    setCurrentPage(newCurrentPage)
  }

  //Hide and show pagination buttons

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
        { (currentPage === 1 ) ? null :
            <button
              type="button"
              className="btn btn-info mr-1"
              onClick={prePage}
          >Anterior &laquo;</button>
        }
        { currentPage === totalPages ? null
          :
          <button
            type="button"
            className="btn btn-info"
            onClick={postPage}
          >Siguiente &raquo;</button>
      
        }
        </div>
    </div>
    </Fragment>
  );
}

export default App;
