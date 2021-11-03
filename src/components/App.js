import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";

class App extends React.Component{
    state = {
        fishes: {},
        order: {}
    };
    componentDidMount(){
        const { params } = this.props.match;
        const localStorageRef = localStorage.getItem(params.storeID);
        if(localStorageRef){
            this.setState({order: JSON.parse(localStorageRef)});
        }
        this.ref = base.syncState(`${params.storeID}/fishes`, {
            context: this,
            state: 'fishes'
        });
    }

    componentDidUpdate(){
        localStorage.setItem(this.props.match.params.storeID, JSON.stringify(this.state.order));
    }

    componentWillUnmount(){
        base.removeBinding(this.ref);
    }

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

    updateFish = (key, updatedFish) =>{
        const fishes = {...this.state.fishes};
        fishes[key] = updatedFish;
        this.setState({fishes});
    };

    deleteFish = (key) => {
        const fishes = {...this.state.fishes};
        fishes[key] = null;
        this.setState({ fishes });
    }

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

    deleteOrder = (key) =>{
        const order = {...this.state.order};
        delete order[key];
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
                <Order fishes={this.state.fishes} order={this.state.order} deleteOrder={this.deleteOrder} />
                <Inventory 
                    addFish={this.addFish}
                    updateFish={this.updateFish}
                    deleteFish={this.deleteFish}  
                    loadSampleFishes={this.loadSampleFishes}
                    fishes={this.state.fishes}
                />
            </div>
        );
    }
}

export default App;