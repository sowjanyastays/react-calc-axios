import axios from 'axios'
import React, { Component } from 'react'

export default class GetDataComponent extends Component {
    constructor(){
        super()
        this.state = {
            comics : [],
            err : ''
        }
    }
    componentDidMount(){
        axios
        .get('https://rickandmortyapi.com/api/character')
        .then(res =>{
            console.log(res);
            console.log(res.data.results)
            this.setState({comics:res.data})

        })
        .catch(error =>{
            console.log(error)
            this.setState({err : 'Error retrieving data'})
        })
    }
  render() {
    const {comics, err} = this.state
    return (
      <div>
        <h1>Comic Posts</h1>
        {comics.length ? comics.results.map(comic => 
        <div className='comic-panel'>
            {comic.name}
            </div>)
            :
            null
        }
        {err? <div>{err}</div> : null}
      </div>
    )
  }
}
