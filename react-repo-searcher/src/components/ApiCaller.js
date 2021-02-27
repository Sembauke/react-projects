import React, { Component } from 'react'
import SearchBar from '../components/SearchBar'
import {BsSearch} from 'react-icons/bs'

class ApiCaller extends Component{

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          repos: [],
          org: '',
          size: 5
        };

        this.increaseContent = this.increaseContent.bind(this)

      }

   increaseContent(){
     this.setState(setSize => ({
       size: setSize.size += 5
     }))

     console.log(this.state.size)
   }   
   
      
   componentDidMount() {
    fetch('https://api.github.com/orgs/google/repos')
      .then(res => res.json())
      .then(
        (result) => {
          //console.log(result)
          this.setState({
            isLoaded: "True",
            repos: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

   render() {
    const { error, isLoaded, repos, size} = this.state;
   
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {    



      return(
      <div className={"wrapper"}><div className={"title"}>Repositories</div>
      <SearchBar repos={repos} size={this.state.size} />
      {/* <ul>
      {repos.slice(0, size).map(json_data => (
        <li key={json_data.id}>
          <span>{json_data.private == true ? <BiLock className={"lock"}/> : <BiLockOpen className={"lock"}/>}</span> 
          <a target="_blank" href={json_data.html_url}>{json_data.full_name} </a>
        </li>
      ))}
      <li><a className={"more"} onClick={this.increaseContent}>Show more</a></li>
      </ul> */}
        
      <button className={"create-org-button"}>Create organization</button>
      </div>)
    }
  }

   
} 

export default ApiCaller    