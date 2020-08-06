import React from 'react';
import './card.css';

export const Card = (props) => (
    <div className="card-container">
        <img src={`https://robohash.org/${props.monster.id}?set=set1&size=180x180`} alt="monster"/>
        <h3> {props.monster.name} </h3>
        <p> {props.monster.email} </p>
    </div>
)