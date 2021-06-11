import React, { useEffect, useState } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import validator from 'validator'

function Form({ setDisplayForm, displayForm }) {
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [emailError, setEmailError] = useState(null)
    const [mobileError, setMobileError] = useState(null)
    const handleSubmitForm = (e) => {
        e.preventDefault();
        var pattern = new RegExp(/^[0-9\b]+$/);
        if (!validator.isEmail(email)) {
            setEmailError('Please enter a valid email')
        }
        if (!pattern.test(mobile)) {
            setMobileError("Please enter a valid number")
        }
    }
    useEffect(() => {
        setEmailError(null)
    }, [email])
    useEffect(() => {
        setMobileError(null)
    }, [mobile])

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
                    <form onSubmit={handleSubmitForm}>
                        <div className="form__input">
                            <p>First Name:</p>
                            <input type="text" placeholder="Jhon" />
                        </div>
                        <div className="form__input">
                            <p>Last Name:</p>
                            <input type="text" placeholder="Doe" />
                        </div>
                        <div className="form__input">
                            <p>Address:</p>
                            <textarea rows="6" cols="80" placeholder="Enter your full Postal Address"></textarea>
                        </div>
                        <div className="form__input">
                            <p>Search:</p>
                            <div className="searchInput">
                                <input type="text" placeholder="India" />
                                <SearchIcon />
                            </div>
                        </div>
                        <div className="form__input">
                            <p>Email ID:</p>
                            <input type="text" placeholder="example@sample.com" onChange={(e) => setEmail(e.target.value)} />
                            {emailError && <span className="error">{emailError}</span>}
                        </div>
                        <div className="form__input">
                            <p>Phone Number:</p>
                            <input type="text" className="countryCode" placeholder="+91" />
                            <input type="number" className="phoneNumber" placeholder="123456789" onChange={(e) => setMobile(e.target.value)} />
                            {mobileError && <span className="error">{mobileError}</span>}
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
