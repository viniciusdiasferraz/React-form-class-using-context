import { createBrowserRouter } from "react-router-dom"
import PaginaInicial from "../paginas/PaginaInicial"
import SelecaoCliente from "../paginas/cadastro/SelecaoCliente"
import LayoutBaseCadastro from "../paginas/cadastro/LayoutBaseCadastro";
import LayoutBase from "../paginas/LayoutBase";
import Interesses from "../paginas/cadastro/Interesses";
import DadosPessoais from "../paginas/cadastro/DadosPessoais";
import Concluido from "../paginas/cadastro/Concluido";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutBase/>,
        children: [{
            path: "cadastro",
            element: <LayoutBaseCadastro/>,
            children: [
                {
                    path: "",
                    element: <SelecaoCliente/>
                },
                {
                    path: "interesses",
                    element: <Interesses/>
                },
                {
                    path: "Dados-pessoais",
                    element: <DadosPessoais />
                },
                {
                    path: "Concluído",
                    element: <Concluido />
                }
            ]
        }],
    },
]);