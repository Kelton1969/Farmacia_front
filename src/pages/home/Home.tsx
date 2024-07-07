
import "./Home.css";
import farmacia from "../../assets/Medicine-pana.svg";
import benzetacil from "../../assets/R (4).jpg";

function Home() {
    
    return (
        <>
            <div className="h-screen">
                <div className="conteudo">
                    <div className="flex w-96 justify-center text-7xl mg">
                        <h1 className="font-bold">Farmacia</h1>
                    </div>
                    <img src={farmacia} alt="" />
                </div>
            </div>
            <div className="partedois">
                
                <div className="compras">
                        <div className="imagem">
                            <img src={benzetacil} alt="" />
                            <div className="compra">
                                <a href="#">Compre</a>
                            </div>
                           
                            <div className="description">
                                <p>Este é um medicamento de alta qualidade, recomendado por especialistas. Ideal para tratar diversas condições de saúde. Consulte seu médico para mais informações.</p>
                                <hr />
                                <button >77,00</button>
                            </div>
                            <button >Fechar</button>
                            <div className="icon">
                                <p>Adicionar ao carrinho</p>
                            </div>
                        </div>
                    
                </div>
            
             <h2>Promoção</h2>
            </div>

        </>
    );
}

export default Home;
