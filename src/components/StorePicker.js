import React from "react";
import { getFunName } from '../helpers';

class StorePicker extends React.Component{
    render(){
        return (
            <> {/* Te permite fragmentar sin emparentar el HTM*/}
                <form className='store-selector'>
                    <h2>Please enter a store</h2>
                    <input type='text' required placeholder='Store Name'  defaultValue={getFunName()} />
                    <button type='submit'>Visit store</button>
                </form>
            </>
        );
    }
}

export default StorePicker;