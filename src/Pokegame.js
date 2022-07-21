import React, { Component } from 'react'
import Pokedex from './Pokedex';
import './Pokegame.css'

export default class Pokegame extends Component {
    static defaultProps = {
        pokemons: [
            { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
            { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
            { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
            { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
            { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
            { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
            { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
            { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }]
    };
    render() {

        let hand1 = [];
        let hand2 = [...this.props.pokemons];

        while (hand1.length < hand2.length) {
            let randInd = Math.floor(Math.random() * hand2.length);
            let randPokemon = hand2.splice(randInd, 1)[0]
            hand1.push(randPokemon)
        };

        let expCounterHand1 = 0
        let expCounterHand2 = 0
        hand1.forEach((p, index) => {
            // console.log(p, index)
            expCounterHand1 = expCounterHand1 + p.base_experience;
        })
        // console.log(expCounterHand1)

        hand2.forEach((p, index) => {
            // console.log(p, index)
            expCounterHand2 = expCounterHand2 + p.base_experience;
        })
        // console.log(expCounterHand2)



        return (
            <div>

                <Pokedex pokemons={hand1} exp={expCounterHand1} isWinner={expCounterHand1 > expCounterHand2} />

                <h2 className='Pokegame-vs'>VS</h2>

                <Pokedex pokemons={hand2} exp={expCounterHand2} isWinner={expCounterHand2 > expCounterHand1} />

            </div>
        )
    }
}
