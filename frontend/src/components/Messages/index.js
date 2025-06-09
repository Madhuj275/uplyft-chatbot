import React,{Component} from 'react'

class Messages extends Component{
  state = {pro:[]}

  componentDidMount(){
   this.getProducts();
  }

  getProducts = async()=>{
    const url = "http://localhost:8000/api/products/";
    const options = {
        method:"GET",
    }
    const response = await fetch(url,options);
    const data = await response.json();
    this.setState({data:data});
    console.log(data);
}

    render(){
        const{pro} = this.state;
        console.log(pro);
        return(
           <></>
        )
    }
}
export default Messages