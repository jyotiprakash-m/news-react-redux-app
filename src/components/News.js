import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Popup from 'reactjs-popup';
import ListLayout from './ListLayout';
import BlockLayout from './BlockLayout';

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
                        trigger={layout ? <ListLayout item={item} /> : <BlockLayout item={item} />}
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
                </>
            ))
            }
        </div >
    )
}

export default News
