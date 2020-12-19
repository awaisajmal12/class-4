// eslint-disable-next-line
import react from 'react';
import king from './king.jpg';

export function Button(props) {

    return (

        <h1>
            {props.counter}
            <img src={king} alt='love' />
        </h1>   
    )
}