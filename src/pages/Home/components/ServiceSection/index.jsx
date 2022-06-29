import './styles.css'

import icone1 from '../../../../assets/icone1.svg'
import icone7 from '../../../../assets/icone7.svg'
import icone4 from '../../../../assets/icone4.svg'
import icone5 from '../../../../assets/icone5.svg'
import icone6 from '../../../../assets/icone6.svg'
import icone8 from '../../../../assets/icone8.svg'

//Global Components

const ServiceSection = () => {
    return (
        <section className="container_service">
            <h4 className="title_service">Por que .boxx?</h4>
            <div className="box_service">
                <p className="description_service">
                    .boxx é sua caixa completa para todas soluções necessárias
                    relacionadas a inovação e atualização do seu negócio no mercado digital.
                </p>
                <img className="img_boxservice" src={icone5} alt="" />
            </div>

            <div className="box_service">
                <img className="img_boxservice" src={icone1} alt="" />
                <p className="description_service">
                    utilizamos tecnologias e ferramentas de última geração visando
                    uma solução completa e manutenível sem perda de qualidade.
                </p>
            </div>

            <div className="box_service">
                <p className="description_service">
                    indicamos veemente a integração e conexão de nossos serviços,
                    de forma que, conectados da maneira correta venham a fazer
                    todo sentido no processo de aceleração de sua empresa.
                </p>
                <img className="img_boxservice" src={icone7} alt="" />
            </div>
            <div className="box_service">
                <img className="img_boxservice" src={icone4} alt="" />
                <p className="description_service">
                    somos adeptos a metodologias ágeis de trabalho para garantir
                    uma entrega de qualidade e fiel ao que for requisitado.
                </p>
            </div>
            <div className="box_service">
                <p className="description_service">
                    pensamos fora da caixa beirando a insanidade com propósitos
                    únicos e ideiais para o sucesso de seu negócio.
                </p>
                <img className="img_boxservice" src={icone6} alt="" />
            </div>
            <img className="img_service" src={icone8} alt="" />
        </section>
    )
}

export default ServiceSection;