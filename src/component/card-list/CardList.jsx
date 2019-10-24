import React from 'react'

import { Card } from '../card/Card.component'

import './card-list.style.css'

export const CardList = props => (
    <div className="container">
        {props.monsters.map(monster => <h3 key={monster.id}> <Card monster={monster} /> </h3>)}
    </div>
);