import './styles.css';
import icone1 from '../../../../assets/icone8.svg'


const InfoSection = () => {
    return (
        <section className="container_devinfo">
            <h6 className="title_devinfo">Nossos Serviços</h6>
            <div className="cards_devinfo">
                <div className="card_devinfo">
                    <h4 className="title_devcard">Back-end</h4>
                    <div className="description_devcard">
                        <p className="item_devcard">API RESTful</p>
                        <p className="item_devcard">Banco de dados</p>
                        <p className="item_devcard">CRUD</p>
                        <p className="item_devcard">Auth JWT</p>
                    </div>
                </div>

                <img className="img_devinfo" src={icone1} alt="" />
                
                <div className="card_devinfo">
                    <h4 className="title_devcard">Front-end</h4>
                    <div className="description_devcard">
                        <p className="item_devcard">SPA</p>
                        <p className="item_devcard">Landing Page</p>
                        <p className="item_devcard">Website</p>
                        <p className="item_devcard">Websystem</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InfoSection;