import React from 'react';
import './FNS.css';
import FNSFile from './FNSFile/FNSFile';

const FNS = () => {

    let FNSData = [
        { Name: "Извещение 1", File: "FNS1.txt" },
        { Name: "Извещение 2", File: "FNS2.txt" },
        { Name: "Извещение 3", File: "FNS3.txt" }
    ]

    let FNSElement = FNSData.map(contract => <FNSFile
        Name={contract.Name}
        File={contract.File}
    />)


    return(

        <div className="FNSFiles">
            {FNSElement}
        </div>

    )
}

export default FNS