import React, {useEffect, useState} from 'react';
import './App.css';
import {List} from '../list/List';
import {Search} from '../search/Search';

export const data = ['javascript', 'react', 'redux', 'typescript', 'angular', 'css', 'vue', 'java']

function App() {
    const [value, setValue] = useState('')
    const [items, setItems] = useState(data)
    useEffect(() => {
        setItems(data.filter(el => el.toLowerCase().includes(value.toLowerCase())))
    }, [value]);
    return (
        <div className="App">
            Learn react
            <Search value={value} onChange={(e) => setValue(e.currentTarget.value)}>
                Find course
            </Search>
            <List items={items}/>
        </div>
    );
}

export default App;
