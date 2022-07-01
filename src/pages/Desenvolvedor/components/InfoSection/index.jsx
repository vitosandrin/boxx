import './styles.css';

const InfoSection = () => {
    return (
        <section className="container_devinfo">
            <h6 className="title_devinfo">Nossos Serviços</h6>
            <div className="card_devinfoo">
                <h4 className="title_devcard">Back-end</h4>
                <div className="description_devcard">
                    <p className="item_devcard">
                        🌎 API RESTful - Nossas API's são produzidas em
                        conformidade com as restrições do estilo de arquitetura REST,
                        permitindo a interação com serviços web RESTful. REST
                        é a sigla em inglês para "Representational State Transfer",
                        que em português significa "transferência de estado representacional".
                        <br />
                        Uma API é um conjunto de definições e protocolos usado no desenvolvimento
                        e na integração de aplicações. Às vezes, as APIs são descritas
                        como um contrato entre um provedor e um usuário de informações,
                        estabelecendo o conteúdo exigido pelo consumidor (a chamada) e
                        o conteúdo exigido pelo produtor (a resposta).
                    </p>

                    <p className="item_devcard">
                        🌎 Banco de dados - Um banco de dados é uma coleção organizada
                        de informações - ou dados - estruturadas, normalmente
                        armazenadas sobre um domínio específico. Um banco de dados
                        eficiente proporciona que diversos setores tenham dados
                        organizados por agrupamentos, coleções e tabelas melhorando
                        a produtividade, evitando conflito e aumentando o potencial
                        de bons resultados com manipulação de métricas para implementações
                        de algoritmos inteligentes e funcionais na sua API.
                    </p>
                </div>
            </div>
            <div className="card_devinfo">
                <h4 className="title_devcard">Front-end</h4>
                <div className="description_devcard">
                    <p className="item_devcard">
                        🌎 SPA - "Single Page Application", que em português significa
                        "aplicação de página única" consiste em uma página web com o
                        objetivo de fornecer uma experiência do usuário tanto em desktop
                        quanto em dispositivos mobile de forma "nativa". Para uma
                        UX (user experience) de qualidade, optamos e indicamos frameworks
                        com  views declarativas e lógica de programação baseada em componentes.
                    </p>
                    <p className="item_devcard">
                        🌎 Landing Page - que em português significa "página de destino",
                        é muito utilizado para captura de leads e conversão em vendas.
                        É uma página objetiva e assertiva usada para obter atenção do
                        usuário e gerar interesse no conteúdo disposto na página.
                    </p>
                    <p className="item_devcard">
                        🌎 Websystem/Desktopsystem - que em português significa "sistema web/
                        sistema área de trabalho", é muito utilizidado para sistema de controle
                        de estoque, sistema de controle de caixa, sistema de cadastro de
                        produtos, sistema de controle financeiro, entre outros. Melhorando
                        mais uma vez a produtividade, evitando conflitos e aumentando o potencial
                        de bons resultados.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default InfoSection;