import React from 'react';
import './Contracts.css';
import ContractFile from './ContractFile/ContractFile';

const Contracts = (props) => {

    let ContractElement = props.Contracts.ContractsData.map(contract => <ContractFile
        Name={contract.Name}
        File={contract.File}
        Dispatch={props.Dispatch}
    />)

    return (

        <div className="partnersFiles">
            {ContractElement}
        </div>

    )
}

export default Contracts