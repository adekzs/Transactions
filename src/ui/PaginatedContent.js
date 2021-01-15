import React, { useState } from "react";
import Pagination from "react-js-pagination";
import TransactionGrid from '../transaction/TransactionGrid'

const PaginatedContent = ({items, isLoading}) => {  // Data to be rendered using pagination.    
    const localItem = items;
    const itemsPerPage = 20;
    const [ activePage, setCurrentPage ] = useState( 1 );

   // Logic for displaying current todos
   const indexOfLastTodo  = activePage * itemsPerPage;
   const indexOfFirstTodo = indexOfLastTodo - itemsPerPage;
    const currentItems = localItem.slice(indexOfFirstTodo, indexOfLastTodo);
   
   const handlePageChange = ( pageNumber ) => {
      console.log( `active page is ${ pageNumber }` );
      setCurrentPage( pageNumber )
   };

   return (
      <div className="center">
         <div className="result">
            <TransactionGrid items={currentItems} isLoading={isLoading}/>
         </div>
         <div className="pagination">
            <Pagination 
               activePage={ activePage }
               itemsCountPerPage={ 20 }
               totalItemsCount={ items.length }
               pageRangeDisplayed={ 4 }
               onChange={ handlePageChange }
            />
         </div>
      </div>
   )

}

export default PaginatedContent;