import React from 'react'

function Pagination({ pageNumbers, paginate, nextPage, previousPage }) {


    return (
        <div>
            <button onClick={previousPage}>Previous</button>
            {pageNumbers.map(number => (
                <a onClick={() => paginate(number)} href='!#' style={{ marginLeft: "5px" }}>
                    {number}
                </a>
            ))}
            <button onClick={nextPage}>Next</button>


        </div>
    )
}

export default Pagination
