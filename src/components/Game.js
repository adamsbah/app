import React from 'react'
import './Game.css'

 const  Game = ({data, id, remove }) =>{
    return (
        <div>
            <h1>
                {data.name}
            </h1>
            <img className="gameImg" src= {data.background_image} alt={data.image} />
           <div>
            Genres:
            {data.genres.map(genre=>{
                return(
                    <span>
                    {genre.name}
                    </span>
                )
            })}
            </div>
        
        <input type='button' onClick={() => remove(id)} value = 'ERASE' />
        </div>
    )
}
export default Game
