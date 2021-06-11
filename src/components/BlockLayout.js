import React from 'react'

function BlockLayout({ item }) {
    return (
        <div className="block">
            <div className="block__contain">
                <h4>{item.title}</h4>
                <p>{item.summary}</p>
                <p className="time">{item.published}</p>
                <div className="imageContainer">

                    <img src="https://source.unsplash.com/random/400x400" alt="" />
                </div>

            </div>
        </div>
    )
}

export default BlockLayout
