import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";

class App extends React.Component{
    state = {
        fishes: {},
        order: {}
    };
    addFish = fish =>{
        //Editar el state
        //1. Conseguir una copia del state existente
        const fishes = {...this.state.fishes};
        //2. Añadir el pescado
        fishes[`fish${Date.now()}`] = fish;
        //3. Añadir el pescado al state
        this.setState({
           fishes: fishes 
        });
    };

    loadSampleFishes = () => {
        this.setState({fishes: sampleFishes});
    };

    addToOrder = (key) => {
        //1.Tomar una copia del state
        const order = {...this.state.order};
        //2.Añadir o actualizar la orden
        order[key] = order[key] + 1 || 1;
        //3. Llamar el setState para actualizar el state
        this.setState({ order });
    }

    render(){
        return(
            <div className='catch-of-the-day'>
                <div className='menu'>
                    <Header tagline='Fresh Seafood Market' />
                    <ul className='fishes'>
                        {Object.keys(this.state.fishes).map(key => (
                            <Fish 
                                key={key}
                                index={key}
                                details={this.state.fishes[key]}
                                addToOrder={this.addToOrder}
                            />
                            ))}
                    </ul>
                </div>
                <Order />
                <Inventory 
                    addFish={this.addFish} 
                    loadSampleFishes={this.loadSampleFishes}
                />
            </div>
        );
    }
}

export default App;