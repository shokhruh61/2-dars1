import './index.css';
import React from 'react'

import User from '../User';


function UserList(props) {
    const { users } = props;
    return (
        <div className='user--list--wrapper'>
            {
                users.length > 0 && users.map((user, index) => {
                    return (
                        <User key={index} user={user} ></User>
                    )
                })
            }
        </div>
    )
}

export default UserList;
