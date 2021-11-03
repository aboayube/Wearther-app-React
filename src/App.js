
import React,{Component} from 'react';
import Form from './components/Form';
import Weather from './components/Weather';

import "./App.css"
//https://api.openweathermap.org/data/2.5/weather?q=cairo&appid=e36ed364400282e43250b6c4c0274d44
const API_KEY='e53b3211ea8496aea47e56218e74c6a5';
class App extends Component{
  state={
    tempreature:'',
    city:'',
    humidity:'',
    description:'',
    error:'',
  }
  getWeather= async (e)=>{
    e.preventDefault();
    const city=e.target.elements.city.value;
    const api=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    const data=await api.json();
    console.log(data);
    if(city || data.cod==404){
this.setState({
  
  tempreature:data.main.temp,
  city:data.name,
  humidity:data.main.humidity,
  description:data.weather[0].description,
  error:'',
  
})
}else{
  this.setState({
      tempreature:'',
      city:'',
      humidity:'',
      description:'',
      error:'Please enter city',
  })
}
    console.log(data);
  }
  render(){
    return (
      <div className="wrapper">
        <div className="form-container">
        <Form  getWeather={this.getWeather}/>
        <Weather
      tempreature={this.state.tempreature}
      city={this.state.city}
      humidity={this.state.humidity}
      description={this.state.description}
      error={this.state.error}
        
        
        
        /></div>
      </div>
    )
  }
}

export default App;
