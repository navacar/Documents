import React from 'react';
import './Footer.css';

const Footer = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = "Today is " + dd + '/' + mm + '/' + yyyy;

    var FileName = "Файл не выбран"


    return (
        <footer className="Footer">
            <time className="Date">
                {today}
            </time>
            <div className="fileName">
                {FileName}
            </div>
        </footer>
    )
}

export default Footer;