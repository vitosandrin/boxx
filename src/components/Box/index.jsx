import { useState } from "react";
import './styles.css'

import plus from '../../assets/icons/plus.svg'
import minus from '../../assets/icons/minus.svg'
const Box = (props) => {

    const [show, setShow] = useState(false)

    return (
        <section className="box_wrapper">
            <div className="box_container">
                <p className="box_title">{props.title}</p>
                <img className="box_image" onClick={() => show ? setShow(false) : setShow(true)} src={show ? minus : plus} alt="" />
            </div>
            {show && (
                <div className="box_show">
                    <p className="box_description">{props.description}</p>
                </div>
            )}
        </section>

    )
}

export default Box;