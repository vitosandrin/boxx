import './styles.css'

const TopSection = () => {
    return (
        <section className="container">
            <div className="container-services">
                <div className="box-services">
                    <h6 className="title_services">Desenvolvimento</h6>
                    <p>Tecnologias e ferramentas de última geração</p>
                </div>
                <div className="box-services">
                    <h6 className="title_services">Design</h6>
                    <p>UI/UIX de alta conversão</p>
                </div>
                <div className="box-services">
                    <h6 className="title_services">Tráfego</h6>
                    <p>Gestão de tráfego escalável</p>
                </div>
            </div>
        </section>
    )
}


export default TopSection;