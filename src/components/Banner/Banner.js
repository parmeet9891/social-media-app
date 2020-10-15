import React from 'react';

const Banner = () => {
    return (
        <div className="jumbotron jumbotron-fluid" style = {{backgroundColor:'#0069D9'}}>
            <div className="container">
                <h1 className="display-4" style = {{color: 'white'}}>Welcome to the Feed</h1>
                <p className="lead" style = {{color: 'white'}}>You can post whatever you want. Also do not forget to explore other's feeds as well.</p>
            </div>
        </div>
    )
}

export default Banner;