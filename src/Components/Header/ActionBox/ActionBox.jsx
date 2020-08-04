import React from 'react';
import './ActionBox.css';
import { loadTxtActionCreator } from '../../../State/State';

const ActionBox = (props) => {

    let href = "/documents/" + props.fileName

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
            {/* <button className="Save" href={href} download>Сохранить</button> */}
            <a className="Save" href={href} download>Сохранить</a>
        </div>
    )
}

export default ActionBox;