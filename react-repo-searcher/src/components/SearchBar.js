import React, { Component } from 'react'
import ApiCaller from '../components/ApiCaller'
import {BiLockOpen} from 'react-icons/bi'
import {BiLock} from 'react-icons/bi'
import '../App.css';
 class SearchBar extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            searchTerm: '',
            searchArray: "Search"
        }
        this.isPrivate = this.isPrivate.bind(this)
    }

    filterRepos = (e) => {
        
        this.setState({searchTerm: e.target.value})
        console.log("state changed", this.state.searchTerm)
        this.filterResult()
    }

    isPrivate(arr){var k = 0; for(k = 0; k < arr.length; k++){if(k % 2 == 0){arr[k] ? <BiLock/> : <BiLockOpen/>}}}

    filterResult = () =>{
        var i;
        var arr = [];
        var arr2 = []
        //var privateRepo = this.props.repos.map(repo => repo.includes(this.state.searchTerm))
        var full_name_arr = this.props.repos.map(repo => repo.full_name.includes(this.state.searchTerm)) 
        
        for(i = 0; i < full_name_arr.length; i++){
            if(full_name_arr[i]){
                arr.push(this.props.repos[i]["full_name"])
                arr2.push(this.props.repos[i]["id"])
           }
        }

        console.log(arr)
        return(
            <ul>{arr.map(
                repo=> 
                <li>
                <a 
                target={"_blank"}
                href={"https://github.com/"+repo}
                className={"listed-items"}
                >
                <span></span>
                {repo}
                </a>
                </li>)}
            </ul>
        )
    }

    render(){
        return(
            <div>
                <input 
             type="text"
             autoComplete="off"
             placeholder="Search repository"
             value={this.state.searchTerm}
             onChange={this.filterRepos}
            />
             {this.filterResult()}
            </div>
            
        )
    }
}

export default SearchBar