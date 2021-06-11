import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Avatar from '@material-ui/core/Avatar';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import ViewAgendaIcon from '@material-ui/icons/ViewAgenda';
import { setLayout } from "../reducers";
function SideBar() {
    let layout = useSelector((state) => state.layout.layout);
    const dispatch = useDispatch();
    const [displayForm, setDisplayForm] = useState(false)
    useEffect(() => {
        // dispatch(setLayout(true));

    }, [])
    console.log(layout);
    const listLayout = () => {
        dispatch(setLayout(true));
    }
    const blockLayout = () => {
        dispatch(setLayout(false));
    }
    console.log("Display form" + displayForm)
    return (
        <div className="sidebar">
            <div className="itemProfile">
                <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                <div className="info">
                    <h4>Hi,Reader,</h4>
                    <p>Here`s your News!</p>
                </div>
            </div>
            <div className="item">
                <h3>View Toggle</h3>
                <div className="toggleOptions">
                    <div className="option" onClick={listLayout}>
                        <FormatListBulletedIcon />
                    </div>
                    <div className="option" onClick={blockLayout}>
                        <ViewAgendaIcon />
                    </div>
                </div>
            </div>
            <div className="item">
                <h3>Have a Feedback?</h3>
                <button onClick={() => setDisplayForm(!displayForm)}>We`re Listening</button>
            </div>

        </div>
    )
}

export default SideBar
