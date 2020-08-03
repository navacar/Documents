import React from 'react';
import './Contracts.css';
import ContractFile from './ContractFile/ContractFile';

const Contracts = () => {

    let ContractData = [
        { Name: "Договор 1", File: "Contract1.txt" },
        { Name: "Договор 2", File: "Contract2.txt" },
        { Name: "Договор 3", File: "Contract3.txt" }
    ]

    let ContractElement = ContractData.map(contract => <ContractFile
        Name={contract.Name}
        File={contract.File}
    />)

    return (

        <div className="contractsFiles">
            {ContractElement}
        </div>

    )
}

export default Contracts