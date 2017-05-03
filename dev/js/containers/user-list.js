import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as userActions from '../actions/user';
import Select from 'react-select';
import AutoComplete from 'material-ui/AutoComplete';
import Avatar from 'material-ui/Avatar';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


@connect((store) => {
    return {
        users: store.users.users,
        selectedUser: store.users.selectedUser
    }
})
export default class UserList extends Component {
    getUsers() {
        if (this.props.users.length > 0) {
            return this.props.users.map((user) => {
                return ({
                    text: user.login,
                    value: <MenuItem
                        primaryText={<img width='35px' src={user.avatar_url}></img>}
                        secondaryText={user.login}
                        />
                })
            })
        }
        else {
            return []
        }
    }
    handleUpdateInput(value) {
        const selectedUser = this.props.users.find((user) => user.login = value)
        this.props.dispatch(userActions.selectUser(selectedUser));
        this.props.dispatch(userActions.fetchUsers(`https://api.github.com/search/users?q=${value} in:login`))
    }
    handleNewRequest() {
        console.log(this.props.selectedUser)
        console.log(this.props.selectedUser.html_url)
        window.open(`https://github.com/${this.props.selectedUser.login}`);
    }
    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <AutoComplete
                        hintText="Type anything"
                        dataSource={this.getUsers()}
                        onUpdateInput={this.handleUpdateInput.bind(this)}
                        onNewRequest={this.handleNewRequest.bind(this)}
                        maxSearchResults = {5}
                        />
                </MuiThemeProvider>
            </div>
        )
    }
}