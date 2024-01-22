

export default function Css() {
  return (
    <form >
    <label>
      Nombre:
      <input
        type="text"
        name="Name"
        placeholder="nombre"
        
       
      />
    </label>

    <br />

    <label>
      Apellido:
      <input
        type="text"
        name="lastName"
        placeholder="Apellido"
       
      />
    </label>

    <br />

    <label>
      Correo Electrónico:
      <input
        type="email"
        name="email"
        placeholder="email"
        
      />
    </label>

    <br />

    <label>
      Mensaje:
      <textarea
        name="message"
        placeholder="mensaje"
        rows={2}
   
      />
    </label>

    <br />

    <button type="submit">Enviar Formulario</button>
  </form>
  )
}
