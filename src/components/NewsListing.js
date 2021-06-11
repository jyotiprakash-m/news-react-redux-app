import axios from 'axios';
import React, { useEffect, useState } from 'react'

import News from "./News"
import Pagination from "./Pagination"

function NewsListing() {
    const [news, setNews] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [newsPerPage] = useState(5);
    const [pageNumber, setPageNumber] = useState(1)
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(news.length / newsPerPage); i++) {
        pageNumbers.push(i);
    }
    useEffect(() => {
        const fetchNews = async () => {
            const res = await axios.get('https://api.first.org/data/v1/news');
            setNews(res.data.data);
        };

        fetchNews();
    }, []);
    console.log(news)
    // Get Current News
    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);
    console.log(currentNews);

    // Change page
    const nextPage = () => {
        { pageNumber < pageNumbers.length && setPageNumber(pageNumber + 1) }
        { pageNumber < pageNumbers.length && setCurrentPage(pageNumber) }

    }
    const previousPage = () => {
        { pageNumber > 0 && setPageNumber(pageNumber - 1) }
        { pageNumber > 0 && setCurrentPage(pageNumber) }

    }
    const paginate = (pageNumber) => {
        setPageNumber(pageNumber)
        setCurrentPage(pageNumber)
    };
    console.log(pageNumber)
    console.log(pageNumbers.length)
    return (
        <div className="allNews">

            <News news={currentNews} />
            <div className="paginationContainer">

                <Pagination pageNumber={pageNumber} pageNumbers={pageNumbers} paginate={paginate} nextPage={nextPage} previousPage={previousPage} />
            </div>

        </div>
    )
}

export default NewsListing
