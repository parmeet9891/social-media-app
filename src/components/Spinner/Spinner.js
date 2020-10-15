import React from 'react';
import './spinner.css';

export default class Spinner extends React.Component {
    render() {
        let {color, size} = this.props;
        color = color ? color: '#7f58af';
        size = size ? size : 64;
        return (
            <div className = "row">
                <div className = "col-md-12 col-lg-12 col-sm-12 text-center">
                    <div className = "spinner-circle" style = {{background: color, width: size, height:size}}></div>
                </div>
            </div>
        )
    }
}