import React from 'react'

export default function Contactos() {
    return (
        <div className="form-style" id="contactos">
            <div>
                <p>Necesitas contactarme? No hay problema, puedes enviarme un email a mi correo <a href="mailto:rickygx.90@gmail.com">rickygx.90@gmail.com</a> o puedes llenar el siguiente formulario y en la brevedad posible me contactare contigo 😉</p>
            </div>
            <form action="">
                <label htmlFor="">Nombres</label><br/>
                <input type="text" placeholder="Ingrese sus nombres"/>
                <br/>
                <label htmlFor="">Email</label><br/>
                <input type="email" placeholder="Ingrese sus email"/>
                <br/>
                <label htmlFor="">Asunto</label><br/>
                <textarea name="txtAsunto" id="" cols="30" rows="10"></textarea>
                <br/>
                <input className="btn-color2-style" type="submit" value="Enviar"/>
            </form>
        </div>
    )
}
