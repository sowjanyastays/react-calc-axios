import axios from 'axios'
import React, { Component } from 'react'
import './GetDataComponent.css'

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
            this.setState({comics:res.data.results})

        })
        .catch(error =>{
            console.log(error)
            this.setState({err : 'Error retrieving data'})
        })
    }
  render() {
    const {comics, err} = this.state
    return (
      <div className='comi'>
        <h1>Comic Posts</h1>
        <div className='posts'>
        {comics.length ? comics.map(comic => 
        <div className='comic-panel'>
        <img src={comic.image} alt=''></img><br></br>
          <strong> Name: </strong>{comic.name}<br></br>
          <strong> Status:</strong> {comic.status}<br></br>
          <strong> Species:</strong> {comic.species}<br></br>
            
            </div>)
            :
            null
        }
        {err? <div>{err}</div> : null}
        </div>
      </div>
    )
  }
}
