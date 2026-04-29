type CardProps ={
    titulo: string
    texto: string
}

function Card({titulo, texto} : CardProps){
    return(
        <div className="card">
            <h2>{titulo}</h2>
            <p>{texto}</p>
        </div>
    )
}
export  default Card