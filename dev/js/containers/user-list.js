import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userActions from '../actions/user';
import Select from 'react-select';

@connect((store) => {
    return {
        users: store.users.users,
        selectedUser: store.users.selectedUser
    }
})
export default class UserList extends Component {
    onInput(e) {
        e.preventDefault();
        this.props.dispatch(userActions.fetchUsers(`https://api.github.com/search/users?q=${e.target.value} in:login`))
     }
    render() {
        const { users } = this.props;
        const onSelect = () => {
            const selectedUser = users.find((user) => user.login = input.value)
            this.props.dispatch(userActions.selectUser(selectedUser));
            window.open(selectedUser.html_url);
        }
        let input;
        return (
            <div>
                <input ref={node => {
                    input = node
                }} list="users" onInput={this.onInput.bind(this)} ></input>
                <datalist id="users">
                    {users.map(user => <option key={user.id} value={user.login} />)}
                </datalist>
                <input type="button" value="Select" onClick={onSelect} />
            </div>
        )
    }
}