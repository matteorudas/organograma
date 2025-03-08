import "./Rodape.css";

const Rodape = () => {
    return (
        <footer className="footer">
            <section>
                <ul>
                    <li>
                        <a href="https://www.instagram.com/matt_brnal/" target="_blank">
                            <img src="/imagens/ig.png" alt="instagram"/>
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src="/imagens/logo.png" alt="logo"/>
            </section>
            <section>
                <p>
                    Desenvolvido por Matteo Bernal - Alura. Todos os direitos reservados.
                </p>
            </section>
        </footer> 
    )
}
export default Rodape;