import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectUser } from '../actions/index'
import { getUsers } from '../actions/index'
import Select from 'react-select';

class UserList extends Component {

    renderList() {
        return this.props.users.map((user) => {
            return (
                <li key={user.id}>
                    {user.login}
                </li>
            );
        });
    }
    gotoUser(value, event) {
        console.log(value.html_url)
        window.open(value.html_url);
    }
    // getOptions() {
    //     return this.props.users.map((user) => {
    //         return (
    //             {
    //                 value: user.id, label: user.login
    //             }
    //         )
    //     })
    // }
    render() {
        let input;
        // var options = [
        //     { value: 'one', label: 'One' },
        //     { value: 'two', label: 'Two' }
        // ];

        // var getOptions = (input) => {
        //     console.log("input: " + input)
        //     this.props.getUsers("wysok").then(()=>{
        //     // if (this.props.users === undefined) {
        //     //     return [];
        //     // }
        //     // else {
        //         return (this.props.users.map((user) => {
        //             var option = { value: user.id, label: user.login }
        //             return option;
        //         }))
        //     }
        //     // }
        //     )
        // }

        // var getOptions = (input, callback) => {
        //     setTimeout(() => {
        //         this.props.getUsers(function (data) {
        //             callback(null, {
        //                 options: function () {
        //                     return (data.map((user) => {
        //                         var option = { value: user.id, label: user.login }
        //                         return option;
        //                     }))
        //                 },
        //                 complete: true,
        //             });
        //         });
        //     }, 500)
        // }
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
                                value: user, label: `<img src="user."  ${user.login}`
                            }
                        )
                    })
                    return { options: data };
                });
        }

        const onChange = (value) => {
            this.setState({
                value: value,
            })
            window.open(this.state.value.value.html_url);
        }
        // const onChange = (value) => {
        //     this.setState({
        //         value: value,
        //     })
        //     console.log(this.state.value)
        // }


            // var onChange = () => {
            //     this.props.getUsers("dsd")
            // }
            // [
            //     { value: 'one', label: 'One' },
            //     { value: 'two', label: 'Two' }
            // ]



            //     console.log(this.props.users)
            //     // return this.props.getUsers(input).map(())
            //     // fetch(`https://api.github.com/search/users?q=wysoki`)
            //     //     .then((response) => {
            //     //         console.log(response.json())
            //     //         return response.json();
            //     //     })
            //     //     .then((json) => {
            //     //         console.log(json)
            //     //         return { options: json };
            //     //     });
            // }
            // <Select ref="stateSelect" autofocus options={options} simpleValue clearable={this.state.clearable} name="selected-state" disabled={this.state.disabled} value={this.state.selectValue} onChange={this.updateValue} searchable={this.state.searchable} />
            return (
                <div>
                    <Select.Async
                        name="form-field-name"
                        value="one"
                        loadOptions={getOptions}
                        
                        onChange={onChange}
                        />

                </div>
            )
        }

    }
// <Select
//                     ref={node => { input = node } }
//                     value="one"
//                     options={getOptions(input)}

//                     />
// onChange={this.props.getUsers(this.ref)}
// <button onClick={() => this.props.getUsers("dsd")} >Get</button>
// loadOptions={this.getOptions}
// onChange={this.props.getUsers(input.value)}
// <input ref={node => {
//     input = node
// } } type="text" onChange={() => this.props.getUsers(input.value)} placeholder="type a github username"></input>
// <AsyncComponent multi={this.state.multi} value={this.state.value} onChange={this.onChange} onValueClick={this.gotoUser} valueKey="id" labelKey="login" loadOptions={this.getUsers} backspaceRemoves={this.state.backspaceRemoves} />
// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
        users: state.users
    };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ getUsers: getUsers }, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(UserList);
