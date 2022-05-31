import PropTypes from 'prop-types';
import React from 'react'

const GameOver = (props) => {


    // ESTADOS. 1 No esta jugando, 2 esta jugando, 3 gano, 4 perdio

    return (
        <div className='game-footer'>
            <div className="col-md-12 text-center some-margin">
                <h1>{!props.arePlaying.play ? 'Try Playing !!' : 'Good luck'}</h1>
            </div>
            {/* Los dos pueden estar dentro de una columna, ya que no estaran los dos activos al mismo tiempo */}
            <div className="col-md-12 text-center some-margin">
                <h1>{props.gameOver.gameover && 'GAME OVER !!'}</h1>
                <h1>{props.hasWin.win && 'Victory !!'}</h1>
            </div>

            <div className="col-md-12 text-center games-body-text">
                <h1>{`You have earn ${props.tokens.tokens} tokens`}</h1>
            </div>

        </div>
    )
}

GameOver.propTypes = {
    arePlaying: PropTypes.object,
    hasWin: PropTypes.object,
    gameOver: PropTypes.object,
    tokens: PropTypes.object,
}

export default GameOver