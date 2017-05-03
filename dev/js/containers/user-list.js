import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userActions from '../actions/user';
import Select from 'react-select';
import AutoComplete from 'material-ui/AutoComplete';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


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
    getUsers () {
        console.log(this.props.users)
        if(this.props.users.length > 0){
            console.log(this.props.users.map((user)=>user.login))
            return this.props.users.map((user)=>user.login)
        }
        else{
            return []
        }
    }
    handleUpdateInput (value) {
        this.props.dispatch(userActions.fetchUsers(`https://api.github.com/search/users?q=${value} in:login`))
    }
    render() {
        const { users } = this.props;
        const onSelect = () => {
            console.log(input.value)
            const selectedUser = users.find((user) => user.login = input.value)
            this.props.dispatch(userActions.selectUser(selectedUser));
            window.open(selectedUser.html_url);
        }
        const onEnter = (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                onSelect()
            }
        const getUsers = () =>{
            console.log(users)
            // if(users !=undefined){
            //     return users.map((user)=>user.login)
            //     console.log(users)
            // }
            return ["a","b","v"]
        }
        }
        let input;
        return (
            <div>
                <input placeholder="type a github username" ref={node => {
                    input = node
                }} list="users" onInput={this.onInput.bind(this)} onKeyPress={onEnter}></input>
                <datalist id="users">
                    {users.map(user => <option key={user.id} value={user.login} />)}
                </datalist>
                <input type="button" value="Select" onClick={onSelect} />
                <MuiThemeProvider>
                    <AutoComplete
                        hintText="Type anything"
                        dataSource={this.getUsers()}
                        onUpdateInput={this.handleUpdateInput.bind(this)}
                    />
                </MuiThemeProvider>
            </div>
        )
    }
}