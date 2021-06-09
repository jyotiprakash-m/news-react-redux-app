import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {
    setLayout
} from "../reducers";
function SideBar() {
    let layout = useSelector((state) => state.layout.layout);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setLayout(true));

    }, [])
    console.log(layout);
    console.log('Hello world')
    return (
        <div className="sidebar">

        </div>
    )
}

export default SideBar
