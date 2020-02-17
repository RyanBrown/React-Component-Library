import React from 'react';
import './App.css';

import Heading from './Components/Heading';

function App() {
    return (
        <div className='App'>
            <h1>React Component Library</h1>
            <Heading type="h1" text="Heading 1" />
            <Heading type="h2" text="Heading 2" />
            <Heading type="h3" text="Heading 3" />
            <Heading type="h4" text="Heading 4" />
            <Heading type="h4">Heading 4</Heading>
            <Heading type="h5" text="Heading 5" />
            <Heading type="h6" text="Heading 6" />
            <Heading type="headline" text="headline" />
            <Heading type="display-1" text="display-1"/>
            <Heading type="display-2" text="display-2"/>
            <Heading type="display-3" text="display-3"/>
        </div>
    );
}

export default App;
