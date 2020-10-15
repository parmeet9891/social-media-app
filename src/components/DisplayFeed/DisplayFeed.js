import React from 'react';
import './DisplayFeed.css';

const DisplayFeed = ({posts, idx}) => {
    const classArr = ['text-white bg-info mb-3', 'text-white bg-dark mb-3'];

    return (
        <div className = "container">
            <div className = "row">
                <div className = "col-md-12 col-sm-12 col-lg-12">
                    <div className = "feed-box">
                        <div className = {idx%2 === 0 ? "card " + classArr[0] : "card " + classArr[1]} >
                            <div className="card-header">
                                Feed #{idx+1}
                            </div>
                            <div className = "row">
                                <div className = "col-md-2">
                                    <img src = {posts.pic} className = "rounded user-img" alt="Cartoon-User" />
                                </div>
                                <div className = "col-md-10">
                                    <div className="card-body">
                                        <h5 className="card-title">This Feed by {posts.email}</h5>
                                        <p className="card-text">{posts.feed}</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DisplayFeed;