import './styles.css'

const Float = (props) => {
    const item = document.querySelectorAll("[data-anime]") ;

    //element offsetop é a altura que o elemnto ta do topo

    const animeScroll = () => {
        const windowTop = window.pageYOffset + window.innerHeight * 0.85;
        item.forEach(element => {
            if (windowTop > element.offsetTop) {
                element.classList.add("animate");
            } else {
                element.classList.remove("animate");
            }
        })
    }
    window.addEventListener("scroll", () => {
        animeScroll();
    });

    return (
        <div animeScroll={animeScroll} data-anime={props.anime}>
            {props.children}
        </div>
    )
}

export default Float;