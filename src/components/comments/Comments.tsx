import React, {useState} from 'react';
import CommentForm from "./CommentForm";
import {useAppSelector} from "../../hook";
import CommentElement from "./Comment";

import styles from "./comments.module.scss";

const Comments = () => {
    const [color, setColor] = useState("#1b1b1b");
    const [description, setDescription] = useState("");
    const items = useAppSelector(state => state.items.list);
    const activeItem = items.find(item => item.active === true)

    return (
        <div className={styles.comments_block}>
            <h2>Comment #</h2>
            {activeItem && activeItem.comments && <div className={styles.comments}>
                {activeItem.comments.map(com => (
                    <CommentElement key={com.description} description={com.description} color={com.color}/>
                ))}
            </div>}
            {activeItem &&
                <CommentForm
                    color={color}
                    setColor={setColor}
                    description={description}
                    setDescription={setDescription}
                    id={activeItem.id}
                />}

        </div>
    );
};

export default Comments;