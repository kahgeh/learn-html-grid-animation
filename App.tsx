import React, { useState } from 'react';
import { render } from 'react-dom';
import LeftRightNavigator from './LeftRightNavigator';
import View1, { TransitionDirection } from './View1';

const App = () => {
    const [show, setShow] = useState(true);
    const [direction, setDirection] = useState(TransitionDirection.None);
    const goBack = () => {
        setShow(!show);
        setDirection(TransitionDirection.RighToLeft);
    }
    const goNext = () => {
        setShow(!show);
        setDirection(TransitionDirection.LeftToRight);
    }
    const navigate = () => { console.log('navigate') }
    return (
        <div className="page">
            <LeftRightNavigator goBack={goBack} goNext={goNext} />
            <div className="header">
                Header
            </div>
            <div className="main-content">
                <View1 show={show} direction={direction} />
            </div>
            <div className="footer">
                Footer
            </div>
        </div>
    );
}

render(<App />, document.getElementById('app'));