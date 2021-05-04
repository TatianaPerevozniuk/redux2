// const items = ['Bob', 'Smith', 'Alice', 'Boris'];

import {useSearch} from "../SearchContext";

const List = (props) => {
    // const {value = ''} = props;

    const {items} = useSearch();
    return (
        <ul>
            {
                items
                    // .filter(item => item.toLowerCase().startsWith(value.toLowerCase()))
                    .map(item => (<li key={item}>{item}</li>))
            }
        </ul>
    );
}
export default List;