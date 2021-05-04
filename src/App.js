import {useState} from 'react';
import SearchInput from "./components/SearchInput";
import List from "./components/List";
import Panel from "./Panel";
import './App.css';
import {SearchProvider} from "./SearchContext";

function App() {
    // const [value, setValue] = useState('');

    return (
        <div className="App">
            <h1>Search</h1>
            {/*<SearchInput onValueChange = {(value) => setValue(value)}/>*/}
            {/*<List value={value}/>*/}

            <SearchProvider>
                <Panel/>
                <List/>
            </SearchProvider>
        </div>
    );
}

export default App;
