import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import * as userActions from './../../actions/userActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userId: this.props.user.currentUser.length > 0 ? this.props.user.currentUser[0].id : ''
        }
    }

    componentDidMount() {
        if(this.props.user.currentUser.length === 0)
            this.props.historyPage.push('/');
    }

    handleLogout = () => {
        let {actions} = this.props;
        actions.removeUserSuccess();
        this.props.historyPage.push('/');
    }

    render() {
        return (
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link className="navbar-brand" to="/feed">Social Media App</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mr-auto">
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to={"/user/"+this.state.userId} className = "nav-link">USER</Link>
                            </li>
                            <li className="nav-item">
                                <button type="submit" className = "btn btn-primary" onClick = {this.handleLogout}>Logout</button>
                            </li> 
                        </ul>
                    </div>
                </nav>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        user: state.user
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userActions, dispatch)
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Navbar);