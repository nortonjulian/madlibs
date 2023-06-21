import React from 'react';

const MadlibStory = ({ noun, verb, adjective }) => {
    return (
        <div>
            <h2>Generated Story</h2>
            <p>
                Once upon a time, there was a {adjective} {noun} who loved to {verb}.
            </p>
        </div>
    );
};

export default MadlibStory;
