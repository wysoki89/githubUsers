import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { usersFetchData, inputChange, selectUser } from '../actions/index';
import Select from 'react-select';

class UserList extends Component {
    // componentDidMount() {
    //     this.props.fetchData(`https://api.github.com/search/users?q=wysoki`);
    // }
    constructor(props) {
        super(props);
        this.onInput = this.onInput.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSelect = this.onSelect.bind(this);
    }
    // onChange(value) {
    //     console.log(value);
    //     selectUser(value);
    //     window.open(value.value.html_url);
    //     console.log(this.props.selectedUser)
    // }
    onInput (e){
        e.preventDefault();
        this.props.fetchData(`https://api.github.com/search/users?q=${e.target.value} in:login`)
        // console.log(this.props.users)
        this.props.inputChange(e.target.value);
    }
    onChange (e){
        e.preventDefault();
        // console.log("Dsd")
        // this.props.fetchData(`https://api.github.com/search/users?q=${e.target.value} in:login`)
        
    }
    onSelect (){
        console.log(this.props.input);
        // var url = this.props.users.find((user)=>user.login=input).html_url
        // window.open(url);
        // e.preventDefault();
        // window.open(value.value.html_url);
        // this.props.fetchData(`https://api.github.com/search/users?q=${e.target.value} in:login`)
        
    }
    // this.props.fetchData(`https://api.github.com/search/users?q=wysoki`
    render() {
        // let input;
        // const getOptions = (input) => {
        //     return fetch("https://api.github.com/search/users?q=" + input + " in:login")
        //         .then((response) => {
        //             return response.json()
        //         }).then((json) => {
        //             if (json.items.length >= 30) {
        //                 json.items.slice(0, 30)
        //             }
        //             var data = json.items.map((user) => {
        //                 return (
        //                     {
        //                         value: user, label: user.login
        //                     }
        //                 )
        //             })
        //             return { options: data };
        //         });
        // }
        // const onSelect = (input) => {
        //     console.log(input);
        //     // var url = this.props.users.find((user)=>user.login="wysoki").html_url
        //     // window.open(url);
        // }
        let input;
        return (
            <div>
                <input ref={node => {
                    input = node
                } } list="users" onInput={this.onInput} ></input>
                <datalist id="users">
                    {this.props.users.map(user => <option  key={user.id} value={user.login} />)}
                </datalist>
                <input type="button" value="Select" onClick={this.onSelect}/>
            </div>
        )
    }
}
// <Select.Async
//     value=""
//     name="form-field-name"
//     loadOptions={getOptions}
//     onChange={this.onChange}
// />

const mapStateToProps = (state) => {
    return {
        users: state.users,
        hasErrored: state.usersHasErrored,
        isLoading: state.usersIsLoading,
        input: state.input
        // selectUser: state.selectedUser,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // selectUser: (user) => dispatch(selectUser(user)),
        fetchData: (url) => dispatch(usersFetchData(url)),
        inputChange: (input) => dispatch(inputChange(input))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
