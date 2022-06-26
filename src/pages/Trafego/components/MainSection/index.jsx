import './styles.css'
import icone from '../../../../assets/icone9.svg';

const MainSection = () => {
    return (
        <section className="container_mktmain">
            <h6 className="title_mktmain">Sobre nossos gestores:</h6>
            <div className="box_mktmain">
                <img className="img_mktmain" src={icone} alt="" />
                <p className="description_mktmain">
                    Realizamos o trabalho completo quando o assunto é 
                    atingir metas e organizar dados. Além dos serviços
                    listados nessa página, a .boxx adota a ideia de evolução
                    tecnológica e automatização de processos, implementando
                    então ferramentas para pesquisa de mercado, geração de leads,
                    e divesas possibilidades que vem agregar esse setor da sua empresa.
                </p>
            </div>
        </section>
    )
}

export default MainSection;