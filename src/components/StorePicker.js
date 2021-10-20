import React from "react";
import { getFunName } from '../helpers';

class StorePicker extends React.Component{
    myInput = React.createRef();

    goToStore = (event) =>{
        // Detener el submit y no refrescar la pagina
        event.preventDefautl();
        // Agarrar el texto del form
        
    }
    render(){
        return (
            <> {/* Te permite fragmentar sin emparentar el HTM*/}
                <form className='store-selector' onSubmit={this.goToStore}>
                    <h2>Please enter a store</h2>
                    <input 
                        type='text' 
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