import { Link } from "react-router-dom";
import { Tipografia } from "../../componentes/Tipografia/Tipografia";
import clienteConcluido from "./assets/cliente-concluido.png";
import { Botao } from "../../componentes/Botao/Botao";

const Concluido = () => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Tipografia variante="h2" componente="h1">
          Seu perfil está completo!
        </Tipografia>
        <Tipografia variante="body2" componente="body2">
          Agora é só começar a se conectar com os melhores freelancers do mercado!
        </Tipografia>
        <img src={clienteConcluido} alt="" style={{borderRadius:"10px", width:"100%", height:"300px", marginBottom:"30px"}}/>
        <Link to="/cadastro">
          <Botao variante="secundaria">
            Voltar para a home
          </Botao>
        </Link>
      </div>
    </>
  )
}

export default Concluido