import React, {FC} from 'react';
import cn from "classnames";
import {removeItem, removeActive, addActive} from "../../store/itemsSlice";
import { useAppDispatch } from "../../hook";

import styles from "./items.module.scss";

interface IItem{
    id: string;
    name: string;
    active: boolean
    comments?: IComment[]
}

interface IComment{
    color: string;
    description: string
}

const Item: FC<IItem> = ({id, active, name, comments }) => {
    const dispatch = useAppDispatch();
    const handleActive = () => {
        dispatch(removeActive())
        dispatch(addActive(id))
    }
    return (
        <div key={id} className={cn(styles.item, {[styles.active]: active})} onClick={handleActive}>
            <div className={styles.name}>{name}</div>
            <span className={styles.count}>{comments?.length}</span>
            <button
                className={styles.delete}
                onClick={()=> dispatch(removeItem(id))}
            >Delete</button>
        </div>
    );
};

export default Item;