import React from 'react';
import './FirstRoot.css';
import { onClickDocuments, onClickСorrespondence } from '../NavBarEngine.js';

const FirstRoot = () => {
    return(
            <div className="firstRoot">
                <div onClick={onClickDocuments} className="Documents">Документы</div>
                <div onClick={onClickСorrespondence} className="Сorrespondence">Переписка</div>
            </div>
        
    )
}
export default FirstRoot