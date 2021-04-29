import React from 'react';
import axios from 'axios';
import {Fade, Zoom, Paper, Typography, Button} from '@material-ui/core';
import {store} from '../index';
import {NewNote} from '../actioncreators';

class PaperInput extends React.Component {
    constructor(props){
      super(props);
    
      this.state = {
    textInput: '',
    dateInput: ''
      }
    
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.sendToParent = this.sendToParent.bind(this);
    this.closeInput = this.closeInput.bind(this);
    this.updateDB = this.updateDB.bind(this);
    
    
    }

    
    handleChangeInput(e){
      this.setState({
        textInput: e.target.value,
      })
    }
    handleChangeDate(e){
      this.setState({
        dateInput: e.target.value,
      })
    }
    
    sendToParent(e){
    
    const input = this.state.textInput;
    const date = this.state.dateInput;
    const dispatched = this.props.dispatched;
    
    dispatched(input,date);

    

    this.setState({
      textInput: "",
    },this.updateDB)
    
    };
    
    closeInput(){
      store.dispatch(NewNote())
    
      this.setState({
        textInput: "",
      })
    }

    updateDB(){

      var last = this.props.entirestate.length - 1;

      var entry = {
        text: this.props.entirestate[last].text,
        date: this.props.entirestate[last].date,
        font: this.props.fonter.font,
        expanded: this.props.fonter.expanded,
        backgroundcolor: this.props.fonter.backgroundcolor,
        color: this.props.fonter.color,
      }     
  
  
        axios.post('http://localhost:5000/entry/add', entry)
          .then(res => console.log(res.data));


    }
    
    render(props){
    
    const Month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    const TodayDate = new Date();
    
    const Test = this.props.render;
    
    return (
      
    <div>
      <Fade in={Test} timeout={200}>
        <div className='entry-input-backdrop'></div>
      </Fade>
      <Fade in={Test} timeout={200}>
        <div className='top-right-shade'></div>
      </Fade>
      <Zoom in={Test} timeout={200}>
         <Paper elevation={5} className = "entry-input" style={{backgroundColor: this.props.fonter.backgroundcolor}}>
            <Typography color="textSecondary" className="float-right"><i>{Month[TodayDate.getMonth()] + " " + TodayDate.getDate() + ", " + TodayDate.getFullYear()}</i></Typography>
            <textarea placeholder = "click here to begin typing..." className='invisible-textbox' style={{fontFamily: this.props.fonter.font, fontSize: this.props.fonter.fontsize, color: this.props.fonter.color, backgroundColor: this.props.fonter.backgroundcolor}} onChange={this.handleChangeInput} value={this.state.textInput} /> 
          
          <Button className="float-right" onClick={this.closeInput}>Close</Button>
          <Button onClick={this.sendToParent} className="float-right">Save and Close</Button>
        </Paper>
      </Zoom>
      </div>
    )
     }
     }

     export default PaperInput;