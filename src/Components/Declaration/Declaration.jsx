import React from 'react';
import './Declaration.css';
import DeclarationFile from './DeclarationFile/DeclarationFile';

const Declaration = () => {

    let DeclarationData = [
        { Name: "Декларация 1", File: "Declaration1.txt" },
        { Name: "Декларация 2", File: "Declaration2.txt" },
        { Name: "Декларация 3", File: "Declaration3.txt" }
    ]

    let DeclarationElement = DeclarationData.map(contract => <DeclarationFile
        Name={contract.Name}
        File={contract.File}
    />)

    return(

        <div className="declarationFiles">
            {DeclarationElement}
        </div>

    )
}

export default Declaration