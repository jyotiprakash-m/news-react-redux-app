import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';

function Form({ setDisplayForm, displayForm }) {
    return (
        <div className="form">
            <div className="form__contains">
                <div className="form__left">
                    <div className="itemProfile">
                        <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                        <div className="info">
                            <h4>Hi,Reader,</h4>
                            <p>Here`s your News!</p>
                        </div>
                    </div>

                    <div className="item">
                        <h3>Have a Feedback?</h3>
                        <button onClick={() => setDisplayForm(!displayForm)}>We`re Listening</button>
                    </div>
                </div>
                <div className="form__right">
                    <h3>Thank you so much for taking the time!</h3>
                    <p>Please provide the below details</p>
                    <form>
                        <div className="form__input">
                            <p>First Name:</p>
                            <input type="text" />
                        </div>
                        <div className="form__input">
                            <p>Last Name:</p>
                            <input type="text" />
                        </div>
                        <div className="form__input">
                            <p>Address:</p>
                            <textarea rows="6" cols="80"></textarea>
                        </div>
                        <div className="form__input">
                            <p>Search:</p>
                            <div className="searchInput">
                                <input type="text" />
                                <SearchIcon />
                            </div>
                        </div>
                        <div className="form__input">
                            <p>Email ID:</p>
                            <input type="text" />
                        </div>
                        <div className="form__input">
                            <p>Phone Number:</p>
                            <input type="text" className="countryCode" />
                            <input type="number" className="phoneNumber" />
                        </div>
                        <div className="form__submit">
                            <input type="submit" value="Submit Feeedback" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form
