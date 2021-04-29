
import { 
         TOGGLEDISPLAY,
         DELETENOTE,
         SEARCHENTRIES,
         APPLYFONTSTYLE,
         APPLYFONTCOLOR,
        APPLYPAGECOLOR,
        LOADDB} from "./actioncreators";
import { NEWNOTE, SAVENOTE } from "./actioncreators";

const initialState = {
  journaling: false,
  searchResults: [],
  currentStyle: {
    font: '', 
    fontsize: "18px",
    backgroundcolor: '',
    color: ''
  },
  entries: [],

};

function reduceFunction(state = initialState, action) {
  switch (action.type) {

    case LOADDB:

    return Object.assign({}, state, {entries: action.payload});

    case NEWNOTE:
    
        
      return Object.assign({}, state, {journaling: (state.journaling === false)? true : false});

    case SAVENOTE:

    const currentDate = new Date();
    const currentDateString = currentDate.getMonth() + 1 + '-' + currentDate.getDate() + '-' + currentDate.getFullYear() + ", " + currentDate.getHours() + ':' + currentDate.getMinutes() + ':' + currentDate.getSeconds()
  

      const newArray = [...state.entries, 
        {
           date: currentDateString,
           text: action.payload.text, expanded: false,
           color: state.currentStyle.color, 
           font: state.currentStyle.font, 
           backgroundcolor: state.currentStyle.backgroundcolor,} ]
      
      return Object.assign({}, state, {journaling: false, entries: newArray});

    case TOGGLEDISPLAY:

    
     const testArray10 = state.entries.map((item,index) => {
       if(item._id != action.payload){

        

         return item
       }
      
        const depends = (item.expanded === true) ? Object.assign({},item, {expanded: false}) : Object.assign({},item, {expanded: true})
       
       return depends;

     }) 

     return Object.assign({}, state, {entries: testArray10})

    case DELETENOTE: 

      const testArray2 = state.entries.filter(x => x._id != action.id);
                
      return Object.assign({},state, {entries: testArray2})

    case SEARCHENTRIES:

        const Term =  new RegExp(action.payload, 'i');
        const testArray3 = (action.payload === "")? [] : state.entries.filter(x => Term.test(x.text) || Term.test(x.date));      
        return Object.assign({}, state, {searchResults: testArray3})

    case APPLYFONTSTYLE:

        const Font = (action.style === 'Cursive')? 'Dancing Script' : (action.style === "Print")? "" : (action.style === "Typewriter")? "Prata": null;
          
        return Object.assign({}, state, {currentStyle: Object.assign({},state.currentStyle,{font:Font})});
          
    case APPLYFONTCOLOR:
          
        const FontColor = (action.color === 'Black')? "": (action.color === 'Green')? 'Green': (action.color === 'Blue')? "Blue": null;
        return Object.assign({},state, {currentStyle: Object.assign({},state.currentStyle,{color: FontColor})});
              
    case APPLYPAGECOLOR:
          
        const PageColor = (action.color === 'White')? '': (action.color === 'Green')? 'lightgreen': (action.color === 'Blue')? 'Lightblue' : null;
        return Object.assign({},state,{currentStyle: Object.assign({},state.currentStyle,{backgroundcolor: PageColor})});
      
    default:
      return state;
  }
}



export {reduceFunction}



