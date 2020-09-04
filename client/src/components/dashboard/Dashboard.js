import React, { useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profiles';
import Spinner from '../layout/Spinner';
import { Link }from 'react-router-dom';


const Dashboard = ({ getCurrentProfile,  profiles: { loading, profile } }) => {
    useEffect(() => {
        getCurrentProfile();
    }, []);
    return loading && profile === null ? <Spinner /> : <Fragment>
        <h1 className="large text-primary">Dashboard</h1>
        <p className="lead">
            <i className="fas fa-user"></i> Welcome {profile && profile.name}
        </p>
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th className="hide-sm">{profile.name}</th>
                </tr>
                <tr>
                    <th>Email</th>
                    <th className="hide-sm">{profile.email}</th>
                </tr>
                <tr>
                    <th>Address</th>
                    <th className="hide-sm">{profile.address}</th>
                    <td className="btn btn-danger">Update</td>
                </tr>
                <tr>
                    <th>Phone Number</th>
                    <th className="hide-sm">{profile.phone}</th>
                    <td className="btn btn-danger">Update</td>
                </tr>
            </thead>
            <tbody>
                
            </tbody>
        </table>
    </Fragment>
};

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profiles: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    profiles: state.profiles
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard)
