import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Popup from 'reactjs-popup';

function News({ news }) {
    let layout = useSelector((state) => state.layout.layout);
    const dispatch = useDispatch();
    const [newsNew, setNewsNew] = useState(news)

    useEffect(() => {
        setNewsNew(news)
    }, [news])


    return (
        <div>
            {newsNew.map((item, index) => (
                <>
                    <Popup
                        trigger={<div className="button">

                            <p key={item.id} style={{ padding: '10px', margin: '3px', backgroundColor: 'pink' }}>
                                {item.title}
                            </p>


                        </div>}
                        modal
                        nested
                    >
                        {close => (
                            <div className="modal">
                                <div className="content">
                                    <iframe src={item.link} width="100%" height="100%" />
                                </div>

                            </div>
                        )}
                    </Popup>
                    <button onClick={deleteNewsItemHandlar(index)}>Remove</button>
                </>
            ))
            }
        </div >
    )
}

export default News
