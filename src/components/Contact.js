import React from 'react';

const Contact = () => {
    return (
        <>
        <div>
            <h1>Send me a message!</h1>
            <form method="post" encType="text/plain">
                <ul id="errorList">
                </ul>
                <label htmlFor="name">
                Name:
                <input type="text" id="name" />
                </label>
                <label htmlFor="subject">
                Subject:
                <input type="text" id="subject" />
                </label>
                <label htmlFor="message">
                Message:
                <textarea id="message"></textarea>
                </label>
                <label htmlFor="submit" >Submit Button</label>
                <input id="submit" type="submit" />
            </form>
        </div>
        </>
    )
}

export default Contact;