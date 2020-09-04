import React from 'react'
import {Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({isAuthenticated}) => {
    if(isAuthenticated){
      return <Redirect to='/dashboard' />
    }
    return (
        <section class="landing">
      <div class="dark-overlay">
        <div class="landing-inner">
          <h1 class="x-large">Safran Test</h1>
          <p class="lead">
            Tool Test for Internship
          </p>
          <div class="buttons">
            <a href="/register" class="btn btn-primary">Sign Up</a>
            <a href="/login" class="btn btn-light">Login</a>
          </div>
        </div>
      </div>
    </section>
    )
}

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps)(Landing);
