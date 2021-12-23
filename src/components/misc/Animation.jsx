import React from 'react';
import Lottie from 'react-lottie-player'

const Animation = (props) => {

    return (
        <div className='lottie-image'>
            <Lottie
                loop
                animationData={props.animData}
                play
                speed={1}
                style={{ width: "700px", height: "700px" }}
            />
        </div>
    )
}

export default Animation