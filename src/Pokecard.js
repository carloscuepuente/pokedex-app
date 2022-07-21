import React, { Component } from 'react'
import "./Pokecard.css"

export default class Pokecard extends Component {

    render() {
        // console.log(this.props)
        const { id, name, type, base_experience } = this.props

        function checkId(id) {
            if (id < 10) {
                return `00${id}`
            }
            if (id >= 10 && id < 100) {
                return `0${id}`
            }
            if (id >= 100) {
                return id
            }
        }

        const imgUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${checkId(id)}.png`


        const card = <div className='Pokecard'>
            <h3 className='Pokecard-title'>{name}</h3>
            <div className='Pokecard-image'>
                <img src={imgUrl} alt="" />
            </div>

            <p className='Pokecard-data'>Type: {type}</p>
            <p className='Pokecard-data'>EXP: {base_experience}</p>
        </div>




        return (
            <div>
                {card}
            </div>
        )
    }
}
