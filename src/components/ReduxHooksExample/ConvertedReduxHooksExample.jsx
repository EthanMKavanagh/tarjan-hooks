import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

function ConvertedReduxHooksExample() {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const increment = () => {
        dispatch({type: 'INCREMENT'});
    }

    return (
        <>
            <h2>Converted Redux Hooks Example</h2>

            <p>Redux counter is: {counter}</p>
            <button onClick={increment}>++</button>
        </>
    );
}

export default ConvertedReduxHooksExample;