import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";

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
    render(){
        return(
            <div className='catch-of-the-day'>
                <div className='menu'>
                    <Header tagline='Fresh Seafood Market' />
                </div>
                <Order />
                <Inventory addFish={this.addFish} />
            </div>
        );
    }
}

export default App;