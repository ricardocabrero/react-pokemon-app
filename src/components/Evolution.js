import React, { Component, Fragment } from 'react'

const URL = 'https://pokeapi.co/api/v2/pokemon-species/'

export class Evolution extends Component{
    state = {
        isEvolution: false,
        nameFrom: ''
    }

    _fetchEvolution(name){
        fetch(URL+name)
        .then(res => res.json())
        .then(data =>{
            const { evolves_from_species } = data
            if(evolves_from_species !== null){
                this.setState({
                    isEvolution: true,
                    nameFrom: evolves_from_species.name
                })
            }
            else{
                this.setState({
                    isEvolution: false,
                })
            }
        })
    }

    componentDidMount(){
        const { name } = this.props
        this._fetchEvolution(name)
    }

    render(){
        const { isEvolution, nameFrom } = this.state
        const theEvolution = isEvolution 
        ? <p>Evoluciona de: <span>{nameFrom}</span></p>
        : <p>Evoluciona de: <span>no</span></p>
        return(
            <Fragment>
                {theEvolution}
            </Fragment>
        )
    }
}