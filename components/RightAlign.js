import React from 'react';

const RightAlign = ({ leftElement, rightElement }) => {
    return (
        <div className="flex justify-between w-full">
            <div className="flex-grow flex-shrink bg-gray-200 p-4">{leftElement}</div>
            <div className="ml-5 justify-end">{rightElement}</div>
        </div>
    );
};

export default RightAlign;