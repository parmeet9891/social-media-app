import React from 'react';
import * as userActions from './../../actions/userActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Navbar from './../Navbar/Navbar';
import Banner from './../Banner/Banner';
import DisplayFeed from './../DisplayFeed/DisplayFeed';
import Error from './../Error/Error';
import Spinner from './../Spinner/Spinner';

class Feed extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            post: '',
            errorMessage: '',
            imagesArray: ['https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png',
            'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_female_user-512.png',
            'https://cdn0.iconfinder.com/data/icons/social-media-network-4/48/male_avatar-512.png']
        }
    }

    componentDidMount() {
        let {actions} = this.props;
        if(this.props.user.data.length === 0)
            actions.fetchData();
    }

    handleChange = (e) => {
        this.setState({
            post: e.target.value
        })
    }

    generateRandomNumber = () => {
        return Math.floor(Math.random() * 3);
    }

    handleClick = () => {
        let {post, imagesArray} = this.state;
        if(post.length === 0) {
            this.setState({errorMessage: 'Post Cannot be Empty!'})
        }
        else {
            let {actions} = this.props;
            let randomIndexNumber = this.generateRandomNumber();
            this.setState({errorMessage: '', post: ''});
            let postObj = {
                'id': this.props.user.currentUser[0].id,
                'email': this.props.user.currentUser[0].email,
                'feed': post,
                'pic': imagesArray[randomIndexNumber]
            }
            actions.addPost(postObj);
        }
    }

    render() {
        let {errorMessage} = this.state;
        return (
            <div>
                <Navbar historyPage = {this.props.history}/>
                <Banner/>
                <div className = "container">
                    <div className = "row justify-content-center">
                        <div className = "col-md-12 col-sm-12 col-lg-12">
                            <div className = "form-group">
                                <textarea value = {this.state.post} placeholder = "Your Feed Goes Here..." className = "form-control" id = "myText" rows = "5" onChange={this.handleChange}/>
                            </div>

                            {errorMessage.length > 0 ? <Error message = {errorMessage} err = "Y" /> : null}
                            {this.props.user.postSuccess.length > 0 ? <Error message = {this.props.user.postSuccess} err = "N" /> : null}
                            {this.props.user.loading ? <Spinner/> : null}

                            <button disabled = {this.props.user.loading} type="submit" className="btn btn-dark" onClick = {this.handleClick}>Post</button>

                            <h3 className = "text-center">Check Other Feeds Here</h3>
                        </div>
                    </div>
                </div>
                {
                    this.props.user.data ? this.props.user.data.map((value,index) => {
                        return  <DisplayFeed key={'Feeds' + index} posts={value} idx={index}/>
                    }) : null
                }
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(Feed);