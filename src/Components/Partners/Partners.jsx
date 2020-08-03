import React from 'react';
import './Partners.css';
import PartnerFile from './PartnerFile/PartnerFile';

const Partners = () => {
    let PartnerData = [
        { Name: "Письмо 1", File: "Partner1.txt" },
        { Name: "Письмо 2", File: "Partner2.txt" },
        { Name: "Письмо 3", File: "Partner3.txt" }
    ]

    let PartnerElement = PartnerData.map(contract => <PartnerFile
        Name={contract.Name}
        File={contract.File}
    />)


    return(

        <div className="partnersFiles">
            {PartnerElement}
        </div>

    )
}

export default Partners