import React from 'react';
import './Signin.css';
import Spinner from './../Spinner/Spinner';
import ValidationClass from './../../utils/Validation';
import Error from './../Error/Error';
import UserService from './../../utils/UserService';
import * as userActions from './../../actions/userActions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Signin extends React.Component {

    user_service = new UserService();
    validation = new ValidationClass();

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: false,
            errorMessage: '',
            loading: false,
        }
    }

    componentDidMount() {
        if(this.props.user.currentUser.length !== 0) {
            this.props.history.push('/feed');
        }

        document.addEventListener('keypress', (event) => {
            if(event.keyCode === 13 || event.which === 13)
                this.handleLogin(event);
        })
    }

    componentWillUnmount() {
        document.removeEventListener('keypress', this.handleLogin);
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    rulesToValidate = () => {
        return [
            {
                field: this.state.email,
                name: 'Email',
                rules: 'required|email|max:100|no_space'
            },
            {
                field: this.state.password,
                name: 'Password',
                rules: 'required|min:5|max:16|no_space'
            }
        ]
    }

    handleLogin = (e) => {
        let {actions} = this.props;
        let {email, password} = this.state;
        e.preventDefault();
        
        let validateData = this.validation.validate(this.rulesToValidate());
        if(validateData.length !== 0) {
            this.setState({error: true, errorMessage: validateData[0]});
        }
        else {
            this.setState({error: false, errorMessage: '', loading: true});
            let signinUserCheck = this.user_service.checkUser(email, password);
            if(signinUserCheck === 0)
                this.setState({error: true, errorMessage: 'This email does not exist', loading: false});
            else {
                this.setState({
                    error: false,
                    errorMessage: '',
                    loading: false
                });
                actions.updateUser(signinUserCheck);
                this.props.history.push('/feed');
            }
            
        }

    }

    render() {
        return (
            <div className = "container" style = {{marginTop: 50}}>
                <div className = "signin">
                <div className = "row justify-content-start">
                    <div className = "col-md-6 col-sm-6 col-lg-6">
                        <h3 className = "heading">Sign In</h3>
                        <p className = "heading-small-content">Welcome Back</p>
                    </div>
                </div>
                <div className = "row justify-content-center">
                    <div className = "col-md-6 col-sm-6 col-lg-6">
                        <form>
                            <div className = "form-group">
                                <input type = "email" name = "email" value = {this.state.email} placeholder = "Email" className = "form-control email-input border-0" id = "emailInput" onChange = {this.handleChange} />
                            </div>
                            <div className = "form-group">
                            <input type = "password" name = "password" value = {this.state.password} placeholder = "Password" className = "form-control pwd-input border-0" id = "passwordInput" onChange = {this.handleChange}/>
                            </div>

                            {this.state.error || this.props.user.fetchUserError ? <Error message = {this.state.errorMessage || this.props.user.fetchUserError} err="Y" /> : null}
                            {this.state.loading ? <Spinner/> : null}
                            <button disabled = {this.state.loading} type="submit" className="btn btn-dark" onClick={this.handleLogin}>Sign In</button>
                        </form>
                    </div>
                </div>

                <div className = "row justify-content-center signup-div">
                    <div className = "col-md-12 col-sm-12 col-lg-12 text-center">
                        <p className = "p-signup">Don't Have an Account ? <a href="/signup">Click Here To Sign Up</a> </p>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(Signin);