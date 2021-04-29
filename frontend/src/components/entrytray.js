import React from 'react';
import {Paper, Typography, Fab} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import CreateIcon from '@material-ui/icons/Create';

const EntryTray = (props) => {

  
  
    var DisplayedEntries = props.entried.map(x => (
      <div className="pointer" key={props.entried.indexOf(x)} id={x._id} onClick={props.togglenote}> 
        <Paper elevation={3} style={{padding: "10px 0px 10px 10px", height: "90%"}}>
        <CreateIcon />
        <Typography color="textSecondary" style={{marginTop: "0px"}}>{x.date.substring(0,1) + "/" + x.date.substring(2,4) + "/" + x.date.substring(5,9)}</Typography>
        
        <p style={{fontSize: "10px",textAlign: "left", textIndent: "10px"}}>{x.text}...</p>
        </Paper>
      </div>));
  
    
    
      return (
        <div className= 'entrytray'>
        
        {DisplayedEntries}
        
          <Fab color="primary" aria-label="add" onClick={props.addNote} className="fab-style" style={{margin: "auto",backgroundColor: "#63bd4c"}}>
            <AddIcon fontSize='large' />
          </Fab> 
        
        </div>
      )
    };

    export default EntryTray;