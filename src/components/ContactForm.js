import React, { useState, useRef } from 'react'
import './ContactForm.scss'
import emailjs from 'emailjs-com'

const ContactForm = () => {
    const emailKey = process.env.REACT_APP_EMAIL_KEY
    const [msgSent, setMsgSent] = useState(false)
    const [nameInput, setNameInput] = useState('')
    const [emailInput, setEmailInput] = useState('')
    const [msgInput, setMsgInput] = useState('')
    const formRef = useRef()

    const nameInputHandler = (event) => {
        setNameInput(event.target.value)
    }
    const emailInputHandler = (event) => {
        setEmailInput(event.target.value)
    }
    const msgInputHandler = (event) => {
        setMsgInput(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        if (nameInput === '') {
            alert('Please include your name!')
            return
        }
        if (emailInput === '' || !emailInput.includes('@')) {
            alert('Please add a valid email!')
            return
        }
        if (msgInput === '') {
            alert('Please add a message')
            return
        }
        setMsgSent(true)

        emailjs.sendForm('gmail', 'webform_1', formRef.current, emailKey).then(
            (result) => {
                console.log(result.text)
            },
            (error) => {
                console.log(error.text)
            }
        )
    }

    return (
        <>
            {!msgSent && (
                <div className="form-contact text-center">
                    <form onSubmit={submitHandler} ref={formRef}>
                        <h1>Let's connect</h1>
                        <h2>Questions? Looking for a resume?</h2>
                        <div className="line"></div>
                        <div className="titles">
                            <div>
                                <label htmlFor="name">Name</label>
                                <input
                                    onChange={nameInputHandler}
                                    type="text"
                                    name="name"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label htmlFor="">Email</label>
                                <input
                                    onChange={emailInputHandler}
                                    type="email"
                                    name="email"
                                    placeholder="Your email"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="">Message</label>
                            <textarea
                                onChange={msgInputHandler}
                                name="message"
                                cols="30"
                                rows="5"
                                placeholder="Your message that says something awesome!"
                            ></textarea>
                        </div>
                        <div type="submit" className="contact-btn" onClick={submitHandler}>
                            Send
                        </div>
                    </form>

                    <script src="https://smtpjs.com/v3/smtp.js"></script>
                </div>
            )}
            {msgSent && (
                <div className="form-contact-sent">
                    <h1>Thank you!</h1>
                    <p>I will reply to you as soon as I can!</p>
                </div>
            )}
        </>
    )
}

export default ContactForm
