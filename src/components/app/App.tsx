import React, {useState} from 'react';
import logo from '../../logo.svg';
import './App.css';
import {List} from '../list/List';
import {Search} from '../search/Search';

export const data = ['js', 'react', 'redux', 'typescript', 'angular']

function App() {
    const [value, setValue] = useState('')
    return (
        <div className="App">
            Learn react
            <Search value={value} onChange={(e) => setValue(e.currentTarget.value)}>
                Find course
            </Search>
            <List items={data}/>
        </div>
    );
}

export default App;
