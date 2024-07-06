import React, { useState } from "react";
import "./Home.css";
import farmacia from "../../assets/Medicine-pana.svg";
import benzetacil from "../../assets/R (4).jpg";

function Home() {
    const [showDescription, setShowDescription] = useState([false, false, false]);
    const [cartItems, setCartItems] = useState([]);

    const handleBuyClick = (event, index) => {
        event.preventDefault(); // Prevenir o comportamento padrão do link
        const updatedShowDescription = [...showDescription];
        updatedShowDescription[index] = !updatedShowDescription[index];
        setShowDescription(updatedShowDescription);
    };

    const handleCloseClick = (index) => {
        const updatedShowDescription = [...showDescription];
        updatedShowDescription[index] = false;
        setShowDescription(updatedShowDescription);
    };

    const handleAddToCart = (item) => {
        setCartItems([...cartItems, item]);
        alert(`Item adicionado ao carrinho: ${item.name}`);
    };

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
                    {[0, 1, 2].map((index) => (
                        <div className={`imagem ${showDescription[index] ? 'show' : ''}`} key={index}>
                            <img src={benzetacil} alt="" />
                            <div className="compra">
                                <a href="#" onClick={(e) => handleBuyClick(e, index)}>Compre</a>
                            </div>
                           
                            <div className="description">
                                <p>Este é um medicamento de alta qualidade, recomendado por especialistas. Ideal para tratar diversas condições de saúde. Consulte seu médico para mais informações.</p>
                                <hr />
                                <button onClick={() => handleAddToCart({ id: index, name: `Benzetacil ${index + 1}` })}>77,00</button>
                            </div>
                            <button className={`close-button ${showDescription[index] ? 'show' : ''}`} onClick={() => handleCloseClick(index)}>Fechar</button>
                            <div className="icon">
                                <p>Adicionar ao carrinho</p>
                            </div>
                        </div>
                    ))}
                </div>
            
             <h2>Promoção</h2>
            </div>

        </>
    );
}

export default Home;
