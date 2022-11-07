
import { createContext } from "react";
import { useState } from "react";


const Notificacion = ({ mensaje, severity }) => {
    const notificacionEstilos = {
        position: 'absolute',
        top: 100,
        right: 10,
        width: 'auto',
        height: 'auto',
        backgroundColor: severity === 'success' ? 'green':'red',
        color: 'white',
        padding: '10px 20px 10px 20px'

    }
    if(mensaje === '') return
    return (
        <div style={notificacionEstilos} className={severity === 'success' ? 'greenClass' : 'redClass'}>
            {mensaje}
        </div>
    )
}
export const NotificacionContext = createContext()

export const NotificacionProvider = ({ children }) => {
    const [mensaje, setMensaje] = useState('')
    const [severity, setSeverity] = useState('success')
    const setNotificacion = (severity, mensaje) => {
        setMensaje(mensaje)
        setSeverity(severity)

        setTimeout(() => {
            setMensaje('')
        },2000)
    }
    return (
        <NotificacionContext.Provider value={{setNotificacion}}>
            <Notificacion severity={severity} mensaje={mensaje}/>
            {children}
        </NotificacionContext.Provider>

    )
}