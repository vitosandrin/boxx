import './styles.css'
import icone from '../../../../assets/icone6.svg';

const MainSection = () => {
    return (
        <section className="container_devmain">
            <h6 className="title_devmain">Sobre nossos desenvolvedores:</h6>
            <div className="box_devmain">
                <img className="img_devmain" src={icone} alt="" />
                <p className="description_devmain">
                    Contamos com uma equipe ágil e eficiente
                    em nossas soluções de desenvolvimento, mantemos
                    fidelidade e objetividade à proposta acolhida e
                    somos extremamente minimalistas e assertivos
                    com a identidade visual da sua empresa.
                </p>
            </div>
        </section>
    )
}

export default MainSection;