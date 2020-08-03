import React from 'react';
import './DeclarationFile.css';
import { setFileNameActionCreator } from '../../../State/State';

const DeclarationFile = (props) => {

    let onClickDeclaration = () => {
        props.Dispatch(setFileNameActionCreator(props.File))
    }

    return(
        <div className="fileLine" onClick={onClickDeclaration}>
            {props.Name}
        </div>
    )
}

export default DeclarationFile