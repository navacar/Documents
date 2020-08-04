import React from 'react';
import './Footer.css';

const Footer = (props) => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = "Today is " + dd + '/' + mm + '/' + yyyy;
    var openFile = "Открываемый файл: " + props.fileName
        
    return (
        <footer className="Footer">
            <time className="Date">
                {today}
            </time>
            <div className="fileNameCSS">
                {openFile}
            </div>
        </footer>
    )
}

export default Footer;