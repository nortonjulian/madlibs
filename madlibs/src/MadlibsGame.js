import React, { useState } from 'react';
import MadlibStory from './MadlibStory'

const MadlibsGame = () => {
    const [inputValues, setInputValues] = useState({
        noun: '',
        verb: '',
        adjective: '',
    });

    const handleChange = (e) => {
        setInputValues({...inputValues, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <h1>Madlibs Game</h1>
            <form onSubmit={handleSubmit}>
               <label>
                Noun:
                <input
                  type="text"
                  name="noun"
                  value={inputValues.noun}
                  onChange={handleChange}
                />
               </label>
               <br />
               <label>
                <input />
                  type="text"
                  name="noun"
                  value={inputValues.verb}
                  onChange={handleChange}
               </label>
               <br />
               <label>
                <input />
                  type="text"
                  name="noun"
                  value={inputValues.adjective}
                  onChange={handleChange}
               </label>
               <br />
               <button type="submit">Generate Story</button>
            </form>

            {inputValues.noun && inputValues.verb && inputValues.adjective && (
                <MadlibStory
                  noun={inputValues.noun}
                  verb={inputValues.verb}
                  adjective={inputValues.adjective}
                />
            )}
        </div>
    );
};

export default MadlibsGame;
