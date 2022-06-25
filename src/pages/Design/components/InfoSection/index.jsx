import './styles.css';
import icone1 from '../../../../assets/icone1.svg'


const InfoSection = () => {
    return (
        <section className="container_designinfo">
            <h6 className="title_designinfo">Nossos Serviços</h6>
            <div className="cards_designinfo">
                <div className="card_designinfo">
                    <h4 className="title_designcard">Design</h4>
                    <div className="description_designcard">
                        <p className="item_designcard">Design UI/UX</p>
                        <p className="item_designcard">Design Gráfico</p>
                        <p className="item_designcard">Webdesign</p>
                    </div>
                </div>

                <img className="img_designinfo" src={icone1} alt="" />
            </div>
        </section>
    )
}

export default InfoSection;