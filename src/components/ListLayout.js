import React from 'react'

function ListLayout({ item }) {
    return (
        <div key={item.id} className="list">
            <div className="list__containt">
                <img src="https://source.unsplash.com/random/400x400" alt="" />
                <div className="news__info">
                    <h4>{item.title}</h4>
                    <p>{item.summary}</p>
                    <p className="time">{item.published}</p>
                </div>
            </div>
        </div>
    )
}

export default ListLayout
