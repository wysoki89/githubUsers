import React from 'react';
import UserList from '../containers/user-list';
require('../../scss/style.scss');

const App = () => (
    <div>
        <h2>User List</h2>
        <UserList />
        <hr />
    </div>
);

export default App;
