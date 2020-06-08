import React from 'react';
import { render } from 'react-dom';
import LeftRightNavigator from './LeftRightNavigator';

const App = () => {
    const navigate = () => { console.log('navigate') }
    return (
        <div className="page">
            <LeftRightNavigator goBack={navigate} goNext={navigate} />
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