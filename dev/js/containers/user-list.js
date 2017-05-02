import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { usersFetchData, selectUser } from '../actions/index';
import Select from 'react-select';

class UserList extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }
    onChange(value){
        console.log(value);
        selectUser(value);
        window.open(value.value.html_url);
        console.log(this.props.selectedUser)
    }
    render() {
        let input;
        const getOptions = (input) => {
            return fetch("https://api.github.com/search/users?q=" + input + " in:login")
                .then((response) => {
                    return response.json()
                }).then((json) => {
                    if (json.items.length >= 30) {
                        json.items.slice(0, 30)
                    }
                    var data = json.items.map((user) => {
                        return (
                            {
                                value: user, label: user.login
                            }
                        )
                    })
                    return { options: data };
                });
        }
        return (
            <div>
                <Select.Async
                    value=""
                    name="form-field-name"
                    loadOptions={getOptions}
                    onChange={this.onChange}
                />

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectUser: state.selectedUser,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectUser: (user) => dispatch(selectUser(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);