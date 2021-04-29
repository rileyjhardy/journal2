import React from "react";
import "./styles.css";
import ShowEntry from './components/showentry';
import LeftPanel from './components/leftpanel';
import EntryTray from './components/entrytray';
import RightPanel from './components/rightpanel';
import PaperInput from './components/paperinput';
import Header from './components/header';
import {store} from './index'
import {NewNote, SaveNote, ToggleDisplay, DeleteNote, SearchEntries, LoadDb} from './actioncreators';
import Axios from "axios";

class Journal extends React.Component {
constructor(props){
  super(props);

this.state = ({
  searchInput: '',
})

this.saveNote = this.saveNote.bind(this);
this.deleteNote = this.deleteNote.bind(this);
this.searchEntries = this.searchEntries.bind(this);
this.handleChange = this.handleChange.bind(this);
this.toggleDisplay = this.toggleDisplay.bind(this);
}

componentDidMount(){
Axios.get('/entry').then(res => {
  
  store.dispatch(LoadDb(res.data));
})
}

  saveNote(text,date){

    store.dispatch(SaveNote(text,date))
  };


deleteNote(e){
  store.dispatch(DeleteNote(e.currentTarget.id));
  Axios.delete('/entry/' + e.currentTarget.id)
      .then(res => {console.log(res.data)})
  
}

toggleDisplay(e){
  store.dispatch(ToggleDisplay(e.currentTarget.id));
  console.log('test')
  console.log(e.currentTarget.id)
}

handleChange(e){

  this.setState({
searchInput: e.currentTarget.value,
  }, this.searchEntries);

}

searchEntries(){
  store.dispatch(SearchEntries(this.state.searchInput));
}

  render(){

    console.log(store.getState());

  return (
    <div className="App">
      
      <Header totalentries={this.props.Entries.entries} />
      <LeftPanel search={this.props.Entries.searchResults} close={this.toggleDisplay} change={this.handleChange} searchvalue={this.state.searchInput} />
      <RightPanel  />
      <EntryTray entried={this.props.Entries.entries} addNote={() => store.dispatch(NewNote())} togglenote={this.toggleDisplay}/>
      <ShowEntry show={this.props.Entries.entries} close={this.toggleDisplay} delete={this.deleteNote} />
      <PaperInput fonter={this.props.Entries.currentStyle} dispatched={this.saveNote} render={this.props.Entries.journaling} entirestate = {this.props.Entries.entries} />
      
    </div>
  );
};
};



export default Journal;
