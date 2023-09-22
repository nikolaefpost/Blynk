import React, {FC} from 'react';
import styles from "./comments.module.scss";
import {addComment} from "../../store/itemsSlice";
import {useAppDispatch} from "../../hook";

interface ICommentForm {
    color: string;
    description: string;
    setColor: (color: string) => void;
    setDescription: (desc: string) => void;
    id: string;
}

const CommentForm: FC<ICommentForm> = ({color, setColor, description, setDescription, id}) => {
    console.log(description)
    const dispatch = useAppDispatch();
    const handleAction = () => {
        if (description.trim().length) {
            console.log({color, text: description, id})
            dispatch(addComment({color, text: description, id}));
            setDescription('')
            setColor("#1b1b1b")
        }
    }
    return (
        <form>
            <input
                className={styles.color}
                type="color"
                value={color}
                onChange={e => setColor(e.target.value)}
            />
            <textarea
                className={styles.desc}
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder="type comment here"
            />
            <button
                className={styles.add}
                onClick={(e) => {
                    e.preventDefault()
                    handleAction()
                }}
            >
                Add new
            </button>
        </form>
    );
};

export default CommentForm;