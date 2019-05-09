import React, { Component } from 'react'
import { CardItem } from '../components/CardItem'

export class Detail extends Component {
    state = {
        pokemon: ''
    }

    componentWillMount(){
        const { pokemon } = this.props.match.params
        this.setState({
            pokemon
        })
    }

    render(){
        const { pokemon } = this.state        
        return(
            <section className="detail">
                <div className="main">
                    <div className="list-wrapper">
                        <CardItem pokemon={pokemon}/>
                    </div>
                </div>
            </section>
        )
    }
}