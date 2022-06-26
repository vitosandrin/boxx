import './styles.css'
import { Link } from "react-router-dom";

//Assets
import astronaut from '../../../../assets/astronaut.webp'
import facebook from '../../../../assets/facebook.svg'
import instagram from '../../../../assets/instagram.svg'


const IntroductionSection = () => {

    return (
        <section className="container_introduction">
            <img className="img_introduction" alt={astronaut} src={astronaut} />
            <div className="info_introduction">
                <h2 className="title_introduction">
                    O que é .boxx?
                </h2>
                <p className="description_introduction">
                    A .boxx é uma startup focada em excelência e resultados!
                    Prezamos constantemente pela autenticidade e qualidade de
                    nossas soluções. .boxx é o pacote completo pra quem
                    deseja acelerar e profissionalizar ainda mais seu negócio
                    no mercado digital.
                </p>
                <div className="box_introduction">
                    <Link to={"/"}>
                        <img className="box_social" src={facebook} alt={facebook} />
                    </Link>
                    <a href="https://www.instagram.com/boxxsolutions/" target="_blank" rel="noreferrer">
                        <img className="box_social" src={instagram} alt={instagram} />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default IntroductionSection;