import React from 'react';
import './PartnerFile.css';
import { setFileNameActionCreator } from '../../../State/State';

const PartnerFile = (props) => {
    
    let onClickPartner = () => {
        props.Dispatch(setFileNameActionCreator(props.File))
    }

    return(
        <div onClick={onClickPartner} className="fileLine">
            {props.Name}
        </div>
    )
}

export default PartnerFile