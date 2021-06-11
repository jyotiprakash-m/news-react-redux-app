import React from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
function Pagination({ pageNumber, pageNumbers, paginate, nextPage, previousPage }) {

    return (
        <div className="pagination">
            {pageNumber > 1 && <ArrowBackIosIcon onClick={previousPage} />}
            {pageNumbers.map((number, index) => (
                <div className={number === pageNumber ? "pageNumber pageNumberDark" : "pageNumber"}>
                    <p key={number} onClick={() => paginate(number)}>
                        {number}
                    </p>
                </div>

            ))
            }
            {pageNumber < pageNumbers.length && <ArrowForwardIosIcon onClick={nextPage} />}


        </div >
    )
}

export default Pagination
