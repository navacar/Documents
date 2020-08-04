import React from 'react';
import './FileContent.css';


const FileContent = (props) => {

    var placeHolder = "Выберите и откройте документ или письмо"

    return(
        <div className="fileName">
            <div className="placeHolder">
                {placeHolder}
            </div>
            <article id="documentTXT" className="docText">
            </article>
        </div>
    )
}

export default FileContent