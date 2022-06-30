import './styles.css';

const InfoSection = () => {
    return (
        <section className="container_designinfo">
            <h6 className="title_designinfo">Nossos Serviços</h6>
            <div className="card_designinfo">
                <h4 className="title_designcard">Design</h4>
                <div className="description_designcard">
                    <p className="item_designcard">
                        🌎 UX Design - UX significa "User Experience",
                        em português, "experiência do usúario". User
                        Experience contempla desde o interesse, as pesquisas
                        e a compra de um produto, pelo usuário. O principal papel
                        do UX Designer é se preocupar com cada etapa a qual o
                        usuário interage com o produto ou serviço.
                    </p>

                    <p className="item_devcard">
                        🌎 UI Design - UI significa "User Interface", em português, "Interface do Usuário".
                        User Interface contempla tudo aquilo que é utilizado na
                        interação com um produto sendo a intermediária visual entre o
                        usuário e a aplicação. O principal papel do UI Designer
                        é se preocupar com o estilo e visual do protótipo.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default InfoSection;