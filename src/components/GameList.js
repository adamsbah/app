import React, { Component } from 'react'
import Game from './Game'
import axios from 'axios'


 class GameList extends Component {
    state={
        games: []
    }
    
    handleDelete = (id) => {
        const newGamesList = this.state.games
        newGamesList.splice(id, 1)
        this.setState({game: newGamesList })
    }
    
    fetchData = () => {
        axios.get('https://wild-games.herokuapp.com/api/v1')
            .then(res=>this.setState({ games: res.data}));
    };
    
    
    
    componentDidMount =() =>{
         this.fetchData();
        
     }
     
     
     
    render() {
        return (
            <div>
            {this.state.games.map((game, i)=>{
                return <Game data = {game} id={i} remove={this.handleDelete} />
            })}
                
            </div>
        )
    }
}

export default GameList
