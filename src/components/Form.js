import React,{Component} from 'react';

const Form =(props)=>{
        return(
            <form onSubmit={props.getWeather}>

                <input name="city" type="text" placeholder="city"/>
                <button>Get Data</button>
            </form>
        )
  
}
export default Form;