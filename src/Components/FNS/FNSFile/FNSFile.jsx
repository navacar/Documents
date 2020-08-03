import React from 'react';
import './FNSFile.css';
import { setFileNameActionCreator } from '../../../State/State';

const FNSFile = (props) => {
    let onClickFNS = () => {
        props.Dispatch(setFileNameActionCreator(props.File))
    }
    return(
        <div className="fileLine" onClick={onClickFNS}>
            {props.Name}
        </div>
    )
}

export default FNSFile