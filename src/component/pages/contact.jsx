import React from "react";


function Contact() {
    return (
        <div className="form-main-div">
            <div><h1>Contact <mark className="mark">Me</mark></h1></div>
            <div className="form-div">
                <form>
                    <div className="fullname-div">
                        <label for="name">Full Name
                            <input id="name" name="name" type="text" required></input>
                        </label>
                    </div>
                    <div className="email-div">
                        <label for="email">EmailAddress <input type='email' id="email" name="email" required>
                        </input>
                        </label>
                    </div>
                    <div className="message-div">
                        <label for="message"> Message
                            <input type="text" id="message" name="message" required ></input>
                        </label>
                    </div>
                    <div className="btn-div">
                        <button type="submit"> Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;