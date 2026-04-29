 type ItemProps = {
        texto:'string';
        onRemover: () => void;
    };
    function Item({texto, onRemover}: ItemProps){
        return(
            <li>
                {texto}
                <button onClick={onRemover}>Remover</button>
            </li>
        )
    }
    export default Item;