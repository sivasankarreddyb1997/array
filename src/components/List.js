import React, { Component } from 'react'

 class List extends Component {
    constructor(props){
        super(props);
        this.state={data:[
    {name:'siva',id:508},
    {name:'sunil',id:509},
    {name:'varam', id:510},
  ]}
    
    }

  render(props) {
    return (
      <>
      <h1>list </h1>
      {this.state.data.map(dat=><li> {dat.name} {dat.id} </li>)  }
      </>
    )
  }
}
export default List;
