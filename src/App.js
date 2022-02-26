import React from 'react'
import Create from './components/create'
import './App.css'
import Read from './components/read';

function App() {
    return (
        <div className='main'>
            <div>
                <h3>React List applications</h3>
            </div>
            <div>
                <Create />
            </div>
            <div style={{margin: 20}}>
                <Read />
            </div>


        </div>
    );
}

export default App
// https://621379ddf43692c9c6062695.mockapi.io/:endpoint