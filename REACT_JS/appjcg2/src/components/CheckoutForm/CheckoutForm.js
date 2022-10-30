
const CheckoutForm = () => {
    return (  
        <div>
            <div>
                Nombre y Apellido
                <input type='text' className="name" />
            </div>
            <div>
                Correo Electrónico
                <input type='email' className="email"/>
            </div>
            <div>
                Teléfono
                <input type='number' className="phone"/>
            </div>
        </div>
    )
}

export default CheckoutForm