import React from 'react';
import './FileContent.css';


const FileContent = (props) => {

    var placeHolder = "Выберите и откройте документ или письмо"

    return(
        <div className="fileName">
            <div className="placeHolder">
                {placeHolder}
            </div>
            <article className="docText">
                {props.documentText}
            </article>
        </div>
    )
}

export default FileContent