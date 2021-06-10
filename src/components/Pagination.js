import React from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
function Pagination({ pageNumbers, paginate, nextPage, previousPage }) {

    return (
        <div style={{ display: 'flex' }}>
            <ArrowBackIosIcon onClick={previousPage} />
            {pageNumbers.map(number => (

                <p key={number} onClick={() => paginate(number)} style={{ marginLeft: "5px" }}>
                    {number}
                </p>

            ))
            }
            <ArrowForwardIosIcon onClick={nextPage} />


        </div >
    )
}

export default Pagination
