import React from 'react';
import './Partners.css';
import PartnerFile from './PartnerFile/PartnerFile';

const Partners = (props) => {

    let PartnerElement = props.Partners.PartnersData.map(contract => <PartnerFile
        Name={contract.Name}
        File={contract.File}
        Dispatch={props.Dispatch}
    />)


    return(

        <div className="partnersFiles">
            {PartnerElement}
        </div>

    )
}

export default Partners