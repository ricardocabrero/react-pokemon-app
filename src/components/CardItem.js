import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
        species: ''
    }
 
    _fetchPokemon(name){
        fetch(URL+name)
        .then(res => res.json())
        .then(data => {
            const { name, sprites, id, types, species } = data
            this.setState({
                name: name,
                img: sprites.front_shiny,
                id: id,
                types: types,
                species: species.name
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

    _printSpecie(specie, name){
        if(specie === name){ //en el caso de ser false, devolvería la evolución, pero no he sabido
                            //de donde extraer el dato y lo he dejado siempre en true para mostrar algo
            return <p>Evoluciona de: <span>{specie}</span></p>
        }
        return false
    }
    
    componentDidMount(){
        const { pokemon } = this.props
        this._fetchPokemon(pokemon)       
    }

    render(){
        const { theClass } = this.props
        const { name, img, id, types, species } = this.state
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
                        {this._printSpecie(species, name)}
                    </div>
                </div>
            </Link>
        ) 
    }
}