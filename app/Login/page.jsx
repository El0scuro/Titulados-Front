import Boton_Perfil from "../../components/boton_login/botones";
import Estilo_login from "./style.module.css"
export default function LoginPage(){
    return (
        <div className= {Estilo_login.contenedor}>
            <div className= {Estilo_login.div_header}>
                <header className= {Estilo_login.header}>
                    <h1 className= {Estilo_login.title}>Sistema de titulados UV</h1>
                    <p className="subtitle">Seleccione su perfil para entrar al sistema</p>
                </header>
            </div>
            <div className={Estilo_login.contenedor_botones}>
                <Boton_Perfil></Boton_Perfil>
            </div>
        </div>
    );
}