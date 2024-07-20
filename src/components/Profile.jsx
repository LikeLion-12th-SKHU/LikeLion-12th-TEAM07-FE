import React from 'react';
import {
    ProfileDetail,
    ProfilePicture,
    ProfileName,
} from '../Css/ProfileCss.js';
const Profile = ({ user }) => {
    return (
        <ProfileDetail>
            <ProfilePicture />
            <ProfileName></ProfileName>
        </ProfileDetail>
    );
};
export default Profile;
