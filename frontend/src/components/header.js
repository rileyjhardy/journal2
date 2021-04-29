import React from 'react';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Header = props => {
    return (
      <div className="header">
        <h3 className='white-text' style={{display: "inline"}}>Total Entries: {props.totalentries.length}</h3>
        <h1 className='white-text'>Journal</h1>
        <div className="user-icon">
          <h2 className='white-text' style={{display: "inline"}}>User</h2>
          <AccountCircleIcon className='white-text' style={{fontSize: '65', marginRight: '10', marginLeft: '10'}} />
        </div>
      </div>
    )
    };

    export default Header;