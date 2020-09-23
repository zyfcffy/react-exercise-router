import React from 'react';
import {Route} from 'react-router-dom';
import NotMatch from './NotMatch';

const User = (props) => {

  const id = props.match.params.user;

  const reg = /^[0-9]*$/g ;

  if(!reg.test(id)){
    return <Route component ={NotMatch}/>
  }


  return (
    <div>
      User profile page.
    </div>
  );
};

export default User;