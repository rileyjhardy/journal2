import React from 'react'
import { Card,Fade, Zoom, CardActions, Typography, Button, CardContent, } from '@material-ui/core';


const ShowEntry = props => {

const ShowDisplayedRendered = props.show.map(x => (

  <div key={x._id}>
    <Fade in={x.expanded} timeout={300}>   
      <div className="show-entry-backdrop"></div>
    </Fade>
    <Zoom in={x.expanded} timeout={300}>
      
        <Card raised style={{backgroundColor: x.backgroundcolor}} className= "show-entry">
          <CardContent style={{textAlign: 'right',}}>
            <Typography color="textSecondary" variant="h6">{x.date.substring(0,1) + "/" + x.date.substring(2,4) + "/" + x.date.substring(5,9)}</Typography>
          </CardContent>
          
          <CardContent className="overflow-class">
            <p style={{color: x.color, fontFamily: x.font, textAlign: 'left'}}>{x.text}</p>
          </CardContent>
          
          <CardActions style={{float: "right"}}>
            <Button size='small' id={x._id} onClick={props.delete} docname={x.date}>Delete</Button>
            <Button size='small' id={x._id} onClick={props.close} style={{Align: "right"}}>Close</Button>
          </CardActions>
        </Card>
    
    </Zoom>
  </div>
));



  return (
  <div>
    
    {ShowDisplayedRendered}
    
  </div>
  )
};

export default ShowEntry;