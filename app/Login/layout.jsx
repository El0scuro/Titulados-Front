import Estilo from "./style.module.css"
export default function RootLayout({children}){
    return(
        <html lang="en">
            <body className={Estilo.background}>
                {children}
            </body>
        </html>
    );
}