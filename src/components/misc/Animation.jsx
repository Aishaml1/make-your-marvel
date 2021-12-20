import React from 'react';
import Lottie from 'react-lottie-player'

const Animation = (props) => {

    return (
        <div>
            <Lottie
                loop
                animationData={props.animData}
                play
                speed={1}
                style={{ width: '40%', height: '40%' }}
            />
        </div>
    )
}

export default Animation