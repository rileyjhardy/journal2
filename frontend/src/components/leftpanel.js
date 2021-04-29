import React from 'react';
import {Card, Typography,CardContent, CardActions, Button, TextField} from '@material-ui/core';



const LeftPanel = props => {

    const SearchResults = props.search.map(x => (
      <Card raised style={{margin: "20px"}} id={x._}>
        <CardContent>
        <Typography color="textSecondary" gutterBottom>{x.date}</Typography>
        <Typography align="left" gutterBottom >{x.text.substring(0,100) + '...'}</Typography>
        </CardContent>
        <CardActions style={{float: "right"}}>
          <Button size="small" id={x._id} onClick={props.close}>Open</Button>
        </CardActions>
      </Card>
    ));
    
    return (
      <div className="left-panel">
        
        <TextField onChange = {props.change} value = {props.searchvalue} margin='normal' variant='outlined' label="Search" />
        
    
        <p>Results: {props.search.length} </p>
    
    {SearchResults}
    
    
        </div>
    )
    };

    export default LeftPanel;