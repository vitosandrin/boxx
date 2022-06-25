import './styles.css';
import { Link } from 'react-router-dom';

const SolutionSection = () => {
    return (
        <section className="wrapper_solution">
            <h4 className="title_solution">Nossos Serviços</h4>
            <div className="container_solution">
                <div className="box_solution">
                    <h6 className="text_solution">Desenvolvimento</h6>
                    <Link to={'/dev'}>
                        <p className="description_solution">Quero saber mais!</p>
                    </Link>
                </div>
                <div className="box_solution">
                    <h6 className="text_solution">Design</h6>
                    <p className="description_solution">Quero saber mais!</p>
                </div>
                <div className="box_solution">
                    <h6 className="text_solution">Tráfego</h6>
                    <p className="description_solution">Quero saber mais!</p>
                </div>
            </div>
        </section>
    )
}

export default SolutionSection;