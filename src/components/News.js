import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import Popup from 'reactjs-popup';

function News({ news }) {
    let layout = useSelector((state) => state.layout.layout);
    const [newsNew, setNewsNew] = useState(news)

    useEffect(() => {
        setNewsNew(news)
    }, [news])


    return (
        <div>
            {layout ?
                newsNew.map((item, index) => (
                    <>
                        <Popup
                            trigger={<div key={item.id} className="list">
                                <div className="list__containt">
                                    <img src="https://source.unsplash.com/random/400x400" alt="" />
                                    <div className="news__info">
                                        <h4>{item.title}</h4>
                                        <p>{item.summary}</p>
                                        <p className="time">{item.published}</p>
                                    </div>
                                </div>
                            </div>}
                            modal
                            nested
                        >
                            {close => (
                                <div className="modal">
                                    <div className="content">
                                        <iframe src={item.link} width="100%" height="100%" title={item.title} />
                                    </div>

                                </div>
                            )}
                        </Popup>
                    </>
                ))
                :
                newsNew.map((item, index) => (
                    <>
                        <Popup
                            trigger={<div className="block">
                                <div className="block__contain">
                                    <h4>{item.title}</h4>
                                    <p>{item.summary}</p>
                                    <p className="time">{item.published}</p>
                                    <div className="imageContainer">

                                        <img src="https://source.unsplash.com/random/400x400" alt="" />
                                    </div>

                                </div>
                            </div>}
                            modal
                            nested
                        >
                            {close => (
                                <div className="modal">
                                    <div className="content">
                                        <iframe src={item.link} width="100%" height="100%" title={item.link} />
                                    </div>

                                </div>
                            )}
                        </Popup>
                    </>
                ))
            }
        </div >
    )
}

export default News
