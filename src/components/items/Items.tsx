import React, {useState} from 'react';
import cn from "classnames";
import styles from "./items.module.scss";
import Item from "./Item";
import {useAppDispatch, useAppSelector} from "../../hook"
import ItemForm from "./ItemForm";
import { addItem, removeActive} from "../../store/itemsSlice";

// const items = [
//     {id: "1", active: true, name: "Test"}
// ]

const Items = () => {
    const [text, setText] = useState('')
    const dispatch = useAppDispatch();
    const items = useAppSelector(state => state.items.list);
    const handleAction = () => {
      if (text.trim().length){
          dispatch(removeActive());
          dispatch(addItem(text));
          setText('')
      }
    }
    return (
        <div className={styles.items_block}>
            <h2>Items</h2>
            <ItemForm value={text} handleAction={handleAction} updateText={setText}/>
            <div className={styles.items}>
                {items.map(item=>(
                    <Item key={item.id} {...item} />
                ))}
            </div>
        </div>
    );
};

export default Items;