// const items = ['Bob', 'Smith', 'Alice', 'Boris'];

const List = (props) => {
    const {value = ''} = props;
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