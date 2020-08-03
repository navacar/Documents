import React from 'react';
import './SecondRoot.css';
import { NavLink } from 'react-router-dom';

const SecondRoot = () => {


    return (
        <div className="secondRoot">
            <div className="documentsRoot">
                <div className="Contracts">
                    <NavLink activeClassName="active" to="/Contracts" > Договоры </NavLink>
                </div>
                <div className="Declarations" >
                    <NavLink activeClassName="active" to="/Declarations" > Декларации </NavLink>
                </div>
            </div>
            <div className="correspondenceRoot">
                <div className="Partners">
                    <NavLink activeClassName="active" to="/Partners" > Партнёры </NavLink>
                </div>
                <div className="FNS" >
                    <NavLink activeClassName="active" to="/FNS" > ФНС </NavLink>
                </div>
            </div>
        </div>
    )
}

export default SecondRoot;