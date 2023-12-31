import React, {useState} from 'react';
import Item from "./Item";
import {useAppDispatch, useAppSelector} from "../../hook"
import ItemForm from "./ItemForm";
import { addItem, removeActive} from "../../store/itemsSlice";

import styles from "./items.module.scss";


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