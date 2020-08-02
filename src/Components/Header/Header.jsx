import React from 'react';
import './Header.css';
import ActionBox from './ActionBox/ActionBox';

const Header = () => {
    let accountName = "Пользователь"
    let accountAvatar = "/icons/Avatar.png"
    let root = document.querySelector(':root');

    let actionOnClick = () => {

        if (getComputedStyle(document.querySelector(':root')).getPropertyValue('--hiddenBoxVisibility') === "visible") {
            root.style.setProperty("--hiddenBoxVisibility", "hidden");
            root.style.setProperty("--hiddenBoxOpacity", "0");
        }else{
            root.style.setProperty("--hiddenBoxVisibility", "visible");
            root.style.setProperty("--hiddenBoxOpacity", "1"); 
        }
        
    }

    return (

        <header className="Header">
            <div className="taskName">
                Тестовое задание
            </div>
            <div className="accountHeader">
                <div className="accountName">
                    {accountName}
                </div>
                <img className="accountImg" src={accountAvatar}/>
            </div>
            <div  className="Action">
                <span onClick={actionOnClick}>Действие</span>
            </div>
            <ActionBox />

        </header>

    )
}

export default Header