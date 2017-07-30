var Main = React.createClass({ 
  getInitialState() {
    return {
      notes: [],
      writableNotes: [],
      readableNotes: []
    }
  },

  // Model manipulation

  componentDidMount() { 
    $.getJSON('/api/notes.json', (response) => {
      this.setState({ 
        notes: response.notes,
        writableNotes: response.writable,
        readableNotes: response.readable
      });
    });

  }, 

  noteDeleted(id) {
    _this = this

    $.ajax({ 
      url: `/api/notes/${id}`, 
      type: 'DELETE', 
      success() { 
        _this.removeNote(id)
      } 
    });
  },

  noteEdited(note,type) {
    $.ajax({ 
      url: `/api/notes/${note.id}`, 
      type: 'PUT', 
      data: { note: note }, 
      success: () => {
        this.updateNote(note,type)
      }
    })
  },

  // View logic

  //object creator?
  //   var key = event.target.id
  // var val = event.target.value
  // var obj  = {}
  // obj[key] = val
  // this.setState(obj)

  removeNote(id) {
     var filteredNotes = this.state.notes.filter((note) => { return note.id != id; }); 
     this.setState({ notes: filteredNotes });
  },

  receiveNote(newNote, type) {
    var allNotes = this.state.notes.concat(newNote)
    this.setState({notes: allNotes })
  },

  updateNote(editedNote, type) {
    var notes = this.state[type].filter((n) => { 
      return n.id != editedNote.id 
    });

    notes.push(editedNote); 
    this.setState({[type]: notes });
  },

  render() { 
    return ( 
      <div> 
        <h1 className="col-lg-12 bg-primary">Hello, World!</h1>
        <NewNote receiveNote={this.receiveNote} />
        <AllNotes type="notes" notes={this.state.notes} noteDeleted={this.noteDeleted} noteEdited={this.noteEdited} />
        <AllNotes type="readableNotes" notes={this.state.readableNotes} noteDeleted={this.noteDeleted} noteEdited={this.noteEdited} />
        <AllNotes type="writableNotes" notes={this.state.writableNotes} noteDeleted={this.noteDeleted} noteEdited={this.noteEdited} />
      </div> 
  )} 
});