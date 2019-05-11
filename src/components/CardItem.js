import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Evolution } from './Evolution';

const URL = 'https://pokeapi.co/api/v2/pokemon/'

export class CardItem extends Component{

    static defaultProps = {
        theClass: 'card-item'
    }

    state = {
        name: '',
        img: '',
        id: '',
        types: [],
    }
 
    _fetchPokemon(name){
        fetch(URL+name)
        .then(res => res.json())
        .then(data => {
            const { name, sprites, id, types } = data
            this.setState({
                name: name,
                img: sprites.front_shiny,
                id: id,
                types: types,
            })
        })
    }

    _capitalizeString(string){
        let long = string.length,
        firstLetter = string.substring(0,1).toUpperCase(),
        newString = firstLetter + string.substring(1, long);
        return newString;
    }

    _printTypes(types){
        return types.map((element,index) => (
            <p key={index}>{element.type.name}</p>
            )
        )
    }

    componentDidMount(){
        const { pokemon } = this.props
        this._fetchPokemon(pokemon)       
    }

    render(){
        const { pokemon, theClass } = this.props
        const { name, img, id, types } = this.state
        const forLink = window.location.href.indexOf('detail') > 1 
        ?  `/`
        : `/detail/${name}`

        return(
            <Link to={forLink}
            className={theClass}
            title={this._capitalizeString(name)}>
                <div className="picture">
                    <figure>
                        <img 
                        src={img} 
                        alt={name}/>
                    </figure>
                    <p>ID&nbsp;/&nbsp;{id}</p>
                </div>
                <div className="text">
                    <h1 className="title">{name}</h1>
                    <div className="species">
                        {this._printTypes(types)}
                    </div>
                    <div className="evolution">
                        <Evolution name={pokemon}/>
                    </div>
                </div>
            </Link>
        ) 
    }
}