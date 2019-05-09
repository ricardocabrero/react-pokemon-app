import React, { Component } from 'react'

import { CardItem } from './CardItem.js'
import NAMES from '../data/data.js'

export class CardList extends Component{
    render(){
        return(
            <div className='list-wrapper'>
                {NAMES.map((name, index) => <CardItem key={index} pokemon={name}/>)}
            </div>
        )
    }
}