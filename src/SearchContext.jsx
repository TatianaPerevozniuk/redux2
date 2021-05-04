import {createContext, useState, useContext} from "react";

const items = ['Bob', 'Smith', 'Alice', 'Boris'];

const SearchContext = createContext(
    {
        items: [],
        setValue: () => {
        }
    }
);

export const SearchProvider = props => {
    const {children} = props;

    const [value, setValue] = useState('');

    const searchObj = {
        items: items.filter(item => item.toLowerCase().startsWith(value.toLowerCase())),
        setValue: newValue => setValue(newValue)
    }

    return (
        <SearchContext.Provider value={searchObj}>
            {children}
        </SearchContext.Provider>
    )
}

//создадим свой хук
export function useSearch() {
    return useContext(SearchContext);
}

//Инкапсулировали наш поиск, бизнес логика, которая относится к поиску в нашем контексте (фильтрация,
// сохранение нашего значения)