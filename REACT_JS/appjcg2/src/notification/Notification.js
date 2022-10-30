import { createContext, useState } from 'react'
import './Notification.css'

const Notification = ({text, severity}) => {
    const notificationStyle = {
        top: 70,
        right: 10,
    }
    
    if(text === '') return

    return (
        <div className={severity === 'Success' ? 'greenClass' : 'redClass'} style={notificationStyle}>
            {text}
        </div>
    )
}

export const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {
    const [message, setMessage] = useState('')
    const [severity, setSeverity] = useState('Success')

    const setNotification = (text) => {
        setMessage(text)
        setSeverity(severity)

        setTimeout(() => {
            setMessage ('')
        }, 2000)
    }


    return(
        <NotificationContext.Provider value={{setNotification}}>
            <Notification text={message} severity={severity} />
            {children}
        </NotificationContext.Provider>
    )
}

export default Notification