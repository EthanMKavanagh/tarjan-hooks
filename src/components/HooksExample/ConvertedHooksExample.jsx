import React, {useState, useEffect} from 'react';
import axios from 'axios';

function ConvertedHooksExample() {
    const [smarties, setSmarties] = useState(0);
    const [baconIpsum, setBaconIpsum] = useState('Loading...')

    useEffect(() => {
        axios.get('https://baconipsum.com/api/', {
            params: {
                sentences: 1,
                type: 'meat',
                format: 'text'
            }
        })
        .then(res => {
            setBaconIpsum(res.data);
        });
    }, []);

    const eatSmartie = () => {
        setSmarties(smarties + 1);
    }

    return (
        <>
            <h2>Converted Hooks Example</h2>

            <p>I ate {smarties} smarties</p>
            <button onClick={eatSmartie}>Eat a smartie</button>

            <h3>Bacon Ipsum says:</h3>
            <p>{baconIpsum}</p>
        </>
    )
}

export default ConvertedHooksExample;