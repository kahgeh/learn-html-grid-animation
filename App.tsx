import React from 'react';
import { render } from 'react-dom';

const App = () => {
    return (
        <div className="page">
            <div className="header">
                Header
            </div>
            <div className="main-content">
            </div>
            <div className="footer">
                Footer
            </div>
        </div>
    );
}

render(<App />, document.getElementById('app'));