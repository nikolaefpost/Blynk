import React, {FC} from 'react';

import styles from "./comments.module.scss";

interface ICommentElement {
    color: string;
    description: string;
}

const CommentElement: FC<ICommentElement> = ({color, description}) => {
    return (
        <div className={styles.comment} style={{"border": `1px solid ${color}`}}>
            <div style={{"background": color}}/>
            <div>{description}</div>
        </div>
    );
};

export default CommentElement;