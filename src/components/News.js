import React from 'react'

function News({ news }) {

    return (
        <div>
            {news.map(item => (
                <p key={item.id} style={{ padding: '10px', margin: '3px', backgroundColor: 'pink' }}>
                    {item.title}
                </p>
            ))}
        </div>
    )
}

export default News
