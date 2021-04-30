import {useSearch} from "../SearchContext";

const SearchInput = (props) => {
    // const {onValueChange} = props;
    //
    // const handleChange = (e) => {
    //     onValueChange(e.target.value);
    // };
    // return <input onChange={handleChange}/>

    const { setValue } = useSearch(); //из контекста через хук получаем setValue

    return <input onChange={event => setValue(event.target.value)}/>
}
export default SearchInput;