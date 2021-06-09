import React from 'react'

function Pagination({ pageNumbers, paginate, nextPage, previousPage }) {


    return (
        <div style={{ display: 'flex' }}>
            <button onClick={previousPage}>Previous</button>
            {pageNumbers.map(number => (
                <p key={number} onClick={() => paginate(number)} style={{ marginLeft: "5px" }}>
                    {number}
                </p>
            ))}
            <button onClick={nextPage}>Next</button>


        </div>
    )
}

export default Pagination
