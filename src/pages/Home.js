import React, { Component } from 'react'

import NAMES from '../data/data.js'
import { CardItem } from '../components/CardItem'
import { CardList } from '../components/CardList'

export class Home extends Component {
    state = {
        inputValue: '',
        match: false,
        pokemon: ''
    }
    _handleCompare = (e) => {
        let name = NAMES.find(element => element === e.target.value.toLowerCase())
        if( name !== undefined ){
            this.setState({
                inputValue: e.target.value,
                match: true,
                pokemon: name
            })
        }
        else{
            this.setState({
                inputValue: e.target.value,
                match: false
            })
        }
    } 

    render(){
        const { match, inputValue, pokemon } = this.state
        const theFilter = match
        ? <CardItem pokemon={pokemon} theClass='card-item single'/>
        :  <CardList/>
        return(
            <section className="home">
                <div className="main">
                    <form className="search-wrapper">
                        <label htmlFor="search"></label>
                        <input onChange={this._handleCompare}
                        type="text" 
                        id="search" 
                        value={inputValue}
                        placeholder="Filtra pokemons por nombre..."/>
                    </form>
                    {theFilter}
                </div>
            </section>
        )
    }
}