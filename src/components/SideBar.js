import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Avatar from '@material-ui/core/Avatar';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import ViewAgendaIcon from '@material-ui/icons/ViewAgenda';
import { setLayout } from "../reducers";
import Form from './Form'
function SideBar() {
    let layout = useSelector((state) => state.layout.layout);
    const dispatch = useDispatch();
    const [displayForm, setDisplayForm] = useState(false)

    console.log(layout);
    const listLayout = () => {
        dispatch(setLayout(true));
    }
    const blockLayout = () => {
        dispatch(setLayout(false));
    }
    return (
        <div className="sidebar">
            <div className="sidebar_contains">
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
                        <div className={layout ? "option optionBlue" : "option"} onClick={listLayout}>
                            <FormatListBulletedIcon />
                        </div>
                        <div className={layout ? "option" : "option optionBlue"} onClick={blockLayout}>
                            <ViewAgendaIcon />
                        </div>
                    </div>
                </div>
                <div className="item">
                    <h3>Have a Feedback?</h3>
                    <button onClick={() => setDisplayForm(!displayForm)}>We`re Listening</button>
                </div>
            </div>
            {displayForm &&
                <div className="formContainer">
                    <div className="greyBody" onClick={() => setDisplayForm(!displayForm)}>nsfjskjfk</div>
                    <div className="formInside">
                        <Form />
                    </div>

                </div>
            }
        </div>
    )
}

export default SideBar
