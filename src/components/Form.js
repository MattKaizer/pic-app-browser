import React, {useState} from 'react';
import Error from './Error';

const Form = ({setSearch}) => {

    const [paramSearch, setParamSearch] = useState('');
    const [error, setError] = useState(false)

    const searchForImages = e => {
        e.preventDefault();

        //Validate
        if(paramSearch.trim() === '') { 
            setError(true) 
            return; 
        }
        //send search params to App component
        setSearch(paramSearch)

        setError(false)
    }

    return ( 
          <form
            onSubmit={searchForImages}
          >
              <div className="row">
                <div className="from-group col-md-8">
                    <input 
                        type="text" 
                        className="form-control form-control-lg"
                        placeholder="Busca una imagen..."
                        onChange={e => setParamSearch(e.target.value)}
                        />
                </div>
                <div className="from-group col-md-4">
                    <input 
                        type="submit" 
                        className="btn btn-lg btn-danger btn-block"
                        value="Buscar"
                        />
                </div>
              </div>
              { error ? <Error message="Agrega un término de búsqueda" /> : null }
          </form>
     );
}
 
export default Form;