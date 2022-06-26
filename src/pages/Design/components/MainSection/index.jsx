import './styles.css'
import icone from '../../../../assets/icone4.svg';

const MainSection = () => {
    return (
        <section className="container_designmain">
            <h6 className="title_designmain">Sobre nossos designers:</h6>
            <div className="box_designmain">
                <p className="description_designmain">
                    Contamos com uma equipe de alta perfomance
                    em User Interface e User Experience (UI/UX).
                    Trabalhamos observando e absorvendo detalhes da
                    sua marca, para que subsequentemente possamos 
                    progredir com Brand Manegement (popularmente conhecido
                    como Branding) em diversas abordagens que geram 
                    credibilidade, segurança e conversão.
                </p>
                <img className="img_designmain" src={icone} alt="" />
            </div>
        </section>
    )
}

export default MainSection;