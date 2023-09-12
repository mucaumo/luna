import { Link } from "react-router-dom";

export default function FotoDaBike(){

    return(
        <main>
            <h1>Foto da Bike</h1>
            <button id="startCamera">Abrir Câmera</button>
            <p>Tem certeza que a imagem está nítida?</p>
            <Link to="/ParteTraseira">
                <button>Enviar</button>
            </Link>
        </main>
    )
}