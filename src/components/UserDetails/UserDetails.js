import React from 'react';
import * as userActions from './../../actions/userActions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class UserDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.userid
        }
    }

    // componentDidMount() {
    //     let {actions} = this.props;
    //     actions.getUserById(this.state.id);
    // }

    render() {
        return (
            <div className = "container" style = {{marginTop: 20}}>
                <div className = "row justify-content-center">
                    <div className = "col-md-6 col-lg-6 col-sm-6">
                        <div className = "card">
                            <h5 className = "card-header">User #{this.props.user.currentUser[0].id}</h5>
                            <div className = "card-body">
                                <blockquote className="blockquote mb-0">
                                    <p>{this.props.user.currentUser[0].email}</p>
                                    <footer className="blockquote-footer"><cite title="Source Title">The user is regular here in posting feeds everyday.</cite></footer>
                                </blockquote>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);