

const NEWNOTE = 'NEWNOTE';
const SAVENOTE = 'SAVENOTE';
const TOGGLEDISPLAY = 'TOGGLEDISPLAY';
const DELETENOTE = 'DELETENOTE';
const SEARCHENTRIES = 'SEARCHENTRIES';
const APPLYFONTSTYLE = 'APPLYFONTSTYLE';
const APPLYFONTCOLOR = 'APPLYFONTCOLOR';
const APPLYPAGECOLOR = 'APPLYPAGECOLOR';
const LOADDB = "LOADDB";

const LoadDb = (data) => {
  return {
    type:LOADDB,
    payload: data,
  }
}

const NewNote = () => {
 return {
  type: NEWNOTE,
 };
};

const SaveNote = (text,date,id) => {
return {
type: SAVENOTE,
payload: {
  date: date,
  id: id,
  text: text,
},

};
};

const ToggleDisplay = (id) => {
  return {
    type: TOGGLEDISPLAY,
    payload: id,
  }
}

const DeleteNote = (id,date) => {
  return {
    type: DELETENOTE,
    id: id,
    date: date,
    
  };
};

const SearchEntries = (term) => {
  return {
    type: SEARCHENTRIES,
    payload: term,
  }
}

const ApplyFontStyle = (style) => {
  return {
    type: APPLYFONTSTYLE,
    style: style,
  }
}

const ApplyFontColor = (color) => {
  return {
    type: APPLYFONTCOLOR,
    color: color,
  }
}

const ApplyPageColor = (color) => {
  return {
    type: APPLYPAGECOLOR,
    color: color,
  }
}

export {NewNote,
        NEWNOTE,
        SAVENOTE,
        SaveNote,
        TOGGLEDISPLAY,
        ToggleDisplay,
        DELETENOTE,
        DeleteNote,
        SEARCHENTRIES,
        SearchEntries,
        ApplyFontStyle,
        APPLYFONTSTYLE,
        APPLYFONTCOLOR,
        ApplyFontColor,
        APPLYPAGECOLOR,
        ApplyPageColor,
        LOADDB,
        LoadDb
        };