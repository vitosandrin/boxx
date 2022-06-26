import './styles.css';
import icone1 from '../../../../assets/icone7.svg'


const InfoSection = () => {
    return (
        <section className="container_mktinfo">
            <h6 className="title_mktinfo">Nossos Serviços</h6>
            <div className="cards_mktinfo">
                <div className="card_mktinfo">
                    <h4 className="title_mktcard">Gestão Digital</h4>
                    <div className="description_mktcard">
                        <p className="item_mktcard">Facebook Ads</p>
                        <p className="item_mktcard">Google Ads</p>
                        <p className="item_mktcard">Youtube Ads</p>
                    </div>
                </div>

                <img className="img_mktinfo" src={icone1} alt="" />
                
                <div className="card_mktinfo">
                    <h4 className="title_mktcard">Consultoria</h4>
                    <div className="description_mktcard">
                        <p className="item_mktcard">Copywriting</p>
                        <p className="item_mktcard">Análise métrica</p>
                        <p className="item_mktcard">Estratégia Digital</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InfoSection;