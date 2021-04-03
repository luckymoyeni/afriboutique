import React from 'react'
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function UserProfile() {
    const history = useHistory();

    const mainreducer = useSelector(state => state.Mainreducer);
    if (!mainreducer.user) {
        history.push('/');
    }
    return (
        <div>

            
        </div>
    )
}

export default UserProfile;
