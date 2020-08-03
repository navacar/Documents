import React from 'react';
import './Declaration.css';
import DeclarationFile from './DeclarationFile/DeclarationFile';

const Declaration = (props) => {

    let DeclarationElement = props.Declaration.DeclarationData.map(contract => <DeclarationFile
        Name={contract.Name}
        File={contract.File}
        Dispatch={props.Dispatch}
    />)

    return(

        <div className="partnersFiles">
            {DeclarationElement}
        </div>

    )
}

export default Declaration