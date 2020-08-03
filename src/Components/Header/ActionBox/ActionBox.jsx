import React from 'react';
import './ActionBox.css';
import { loadTxtActionCreator } from '../../../State/State';

const ActionBox = (props) => {


    let onClickOpen = () => {
        let root = document.querySelector(':root');
        if (props.fileName !== "никакой") {
            root.style.setProperty("--placeHolderVisibility", "hidden");
            props.Dispatch(loadTxtActionCreator())
        }
    }

    return (
        <div className="actionBox">
            <button onClick={onClickOpen} className="Open">Открыть</button>
            <button className="Save">Сохранить</button>
        </div>
    )
}

export default ActionBox;