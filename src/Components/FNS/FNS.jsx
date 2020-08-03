import React from 'react';
import './FNS.css';
import FNSFile from './FNSFile/FNSFile';

const FNS = (props) => {

    let FNSElement = props.FNS.FNSData.map(contract => <FNSFile
        Name={contract.Name}
        File={contract.File}
        Dispatch={props.Dispatch}
    />)

    return(
        <div className="partnersFiles">
            {FNSElement}
        </div>

    )
}

export default FNS