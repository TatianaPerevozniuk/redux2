import SearchInput from "./components/SearchInput";
import {useSearch} from "./SearchContext";

const Panel = props => {
    const {items} = useSearch();
    return (
        <nav>
            <SearchInput/>
            {items.length}
        </nav>
    );
}
 export default Panel;