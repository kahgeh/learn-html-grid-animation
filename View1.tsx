import React, { useState } from 'react';

export interface ViewProps {
    show: boolean;
    direction: TransitionDirection;
}

export enum TransitionDirection {
    None,
    LeftToRight,
    RighToLeft
}

function pickEntryTransition(show: boolean, direction: TransitionDirection) {
    if (!show) {
        return "";
    }

    if (direction === TransitionDirection.LeftToRight) {
        return "in-from-left";
    }
    if (direction === TransitionDirection.RighToLeft) {
        return "in-from-right";
    }

    return "";
}

function pickExitTransition(show: boolean, direction: TransitionDirection) {
    if (show) {
        return "";
    }
    if (direction === TransitionDirection.RighToLeft) {
        return "out-to-left";
    }
    if (direction === TransitionDirection.LeftToRight) {
        return "out-to-right";
    }

    return "";
}

const View1 = ({ show, direction }: ViewProps) => {
    const [shouldRender, setShouldRender] = useState(show);
    const entryTransition = pickEntryTransition(show, direction);
    const exitTransition = pickExitTransition(show, direction);
    if (!shouldRender && show) {
        setShouldRender(true);
    }
    const unMountAfterExitAnimation = (show) => {
        if (show) {
            return;
        }
        setShouldRender(false);
    }

    return (
        shouldRender &&
        <div className={`view-content ${entryTransition} ${exitTransition}`}>
            <div className="view" onAnimationEnd={() => unMountAfterExitAnimation(show)}>Page 1</div>
        </div>
    )
}

export default View1;