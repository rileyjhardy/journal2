import React from 'react';
import {List, Divider, ListItem, ListItemText, ListSubheader} from '@material-ui/core';

import {ApplyFontStyle, ApplyFontColor, ApplyPageColor} from '../actioncreators';
import {store} from '../index';

const RightPanel = props => {
    return (
      <div className="right-panel">
        <List subheader={<ListSubheader component='div'>Font</ListSubheader>}>
          <Divider />
          <ListItem button onClick={() => store.dispatch(ApplyFontStyle("Print"))}>
            <ListItemText primary='Print' />
          </ListItem>
          <Divider />
          <ListItem button onClick={() => store.dispatch(ApplyFontStyle("Cursive"))}>
            <ListItemText primary='Dancing Script' />
          </ListItem>
          <Divider />
          
          <ListItem button onClick={() => store.dispatch(ApplyFontStyle("Typewriter"))}>
            <ListItemText primary='Prata' />
          </ListItem>
          <Divider />
        </List>
        <List subheader={<ListSubheader component='div'>Font Color</ListSubheader>}>
          <Divider />
          <ListItem button onClick = {() => store.dispatch(ApplyFontColor("Black"))}>
            <ListItemText primary="Black" />
          </ListItem>
          <Divider />
          <ListItem button onClick = {() => store.dispatch(ApplyFontColor("Green"))}>
            <ListItemText primary="Green" />
            </ListItem>
          <Divider />
          <ListItem button onClick = {() => store.dispatch(ApplyFontColor("Blue"))}>
            <ListItemText primary="Blue" />
            </ListItem>
            <Divider />
          </List>
          <List subheader={<ListSubheader component='div'>Page Color</ListSubheader>}>
          <Divider />
          <ListItem button onClick = {() => store.dispatch(ApplyPageColor("White"))}>
            <ListItemText primary="White" />
          </ListItem>
          <Divider />
          <ListItem button onClick = {() => store.dispatch(ApplyPageColor("Green"))}>
            <ListItemText primary="Green" />
            </ListItem>
          <Divider />
          <ListItem button onClick = {() => store.dispatch(ApplyPageColor("Blue"))}>
            <ListItemText primary="Blue" />
            </ListItem>
            <Divider />
          </List>
  
        </div>
    )
  }

  export default RightPanel;