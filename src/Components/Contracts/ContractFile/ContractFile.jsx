import React from 'react';
import './ContractFile.css';
import { setFileNameActionCreator} from '../../../State/State';

const ContractFile = (props) => {
    let onClickContract = () => {
        props.Dispatch(setFileNameActionCreator(props.File))
    }

    return(
        <div className="fileLine" onClick={onClickContract}>
            {props.Name}
        </div>
    )
}

export default ContractFile