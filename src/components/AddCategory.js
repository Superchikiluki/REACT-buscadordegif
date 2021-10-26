import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ( { setCategories } ) => {

    const [inputValue, setinputValue] = useState('');   

    const handleImputChange = (e) => {
        setinputValue( e.target.value );
    }

    const handleSumit = (e) => {
        e.preventDefault();

        if ( inputValue.trim().length > 2 ) {
            setCategories( cats => [ inputValue, ...cats, ] );
            setinputValue('');
        }
        
       //console.log('sumit hecho')

    }

    return (
        <form onSubmit={ handleSumit }>
          <input 
              type="text"
              value={ inputValue }
              onChange={ handleImputChange }
          />
        </form>
    )
}  
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}