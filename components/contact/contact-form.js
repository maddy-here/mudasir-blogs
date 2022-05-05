import React, { useState, useEffect } from "react";
import styles from './contact-form.module.css';
import Notification from "../../ui/notification";

const ContactForm = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [notificationStatus, setNotificationStatus] = useState();
    const [errorMessage, setErrorMessage] = useState('');


    const sendContactData = async (contactData) => {
        try{
            const res = await fetch('/api/contact',{
                method:'POST',
                body: JSON.stringify(contactData),
                headers:{
                    'Content-Type':'application/json'
                }
            })
            const data = await res.json();
            if(!res.ok){
            throw new Error(data.message || 'something went wrong')
            }
            return data;
        }catch(error){
            throw error;
        }
    }

    const formSubmitHandler = async event => {
        event.preventDefault();
        try{
            setNotificationStatus('pending');
            await sendContactData({
                username,
                email,
                message
            })
            setNotificationStatus('success')
        }catch(error){
            setErrorMessage(error.message)
            setNotificationStatus('error')
            throw error;
        }
        setUsername('');
        setEmail('');
        setMessage('');
    }

    let notification;

    if(notificationStatus === 'pending'){
        notification = {
            title:'Pending!',
            status:'pending',
            message:'Sending Message...'
        }
    }

    
    if(notificationStatus === 'success'){
        notification = {
            title:'Succes!',
            status:'success',
            message:'Message sent successfully.'
        }
    }
    
    if(notificationStatus === 'error'){
        console.log(errorMessage)
        notification = {
            title:'Error!',
            status:'error',
            message:errorMessage
        }
    }

    useEffect(()=>{
        const timer = setTimeout(()=>{
            if(notificationStatus === 'pending' || notificationStatus === 'error') return;
            setNotificationStatus('');
        },2500)
        return (()=>{
            clearTimeout(timer);
        })
    },[notificationStatus]);

    return (
        <section className={`container ${styles['form-section']}`}>
            <h1 className={styles.heading}>How may i help you?</h1>
            <form className={styles.form} onSubmit={formSubmitHandler}>
                <div className={styles['form-content-wrapper']}>

                    <div className={styles['form-input']}>
                        <label htmlFor="username">
                            Username
                        </label>

                        <input 
                            onChange={event=>setUsername(event.currentTarget.value)}
                            value={username}
                            type='text' 
                            id='username' 
                            name="username" 
                            placeholder="enter username" 
                            required 
                        />
                    </div>
                    
                    <div className={styles['form-input']}>
                        <label htmlFor="email">
                            Email
                        </label>

                        <input 
                            onChange={event=>setEmail(event.currentTarget.value)}
                            value={email}
                            type='email' 
                            id='email' 
                            name="email" 
                            placeholder="enter email" 
                            required
                        />
                    </div>
                    
                    <div className={styles['form-input']}>
                        <label htmlFor="message">
                            Message
                        </label>

                        <textarea 
                            onChange={event=>setMessage(event.currentTarget.value)}
                            value={message}
                            rows={5}
                            cols={40}
                            id='message' 
                            name="message" 
                            placeholder="type your message" 
                            required
                        />
                    </div>
                </div>

                <button className={styles.btn} type="submit">submit</button>
            </form>

            {notificationStatus && <Notification title={notification.title} status={notification.status} message={notification.message}/>}
        </section>
    );
};

export default ContactForm;
