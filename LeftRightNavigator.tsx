import React from 'react';

export interface LeftRightNavigatorProps {
    goBack: () => void;
    goNext: () => void;
}

const LeftRightNavigator = ({ goNext, goBack }: LeftRightNavigatorProps) => {
    return (
        <>
            <div className="control side-handle left" onClick={goBack}>{"<"}</div>
            <div className="control side-handle right" onClick={goNext}> {">"}</div>
        </>
    )
}

export default LeftRightNavigator;