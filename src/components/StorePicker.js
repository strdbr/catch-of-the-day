import React from "react";
import { getFunName } from '../helpers';
import PropTypes from 'prop-types';

class StorePicker extends React.Component{
    myInput = React.createRef();

    static propTypes = {
        history: PropTypes.object
    }

    goToStore = event =>{
        // Detener el submit y no refrescar la pagina
        event.preventDefault();
        // Agarrar el texto del form
        const storeName = this.myInput.current.value;
        // Cambiar el URL a lo que esta en el form
        this.props.history.push(`/store/${storeName}`);
    }
    render(){
        return (
            <> {/* Te permite fragmentar sin emparentar el HTM*/}
                <form className='store-selector' onSubmit={this.goToStore}>
                    <h2>Please enter a store</h2>
                    <input 
                        type='text' 
                        ref={this.myInput}
                        required 
                        placeholder='Store Name'  
                        defaultValue={getFunName()} 
                    />
                    <button type='submit'>Visit store</button>
                </form>
            </>
        );
    }
}

export default StorePicker;