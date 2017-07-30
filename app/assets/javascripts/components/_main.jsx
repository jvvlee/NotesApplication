var Main = React.createClass({ 
  getInitialState() {
    return {
      notes: []
    }
  },

  // Model manipulation

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

  noteEdited(note) {

    $.ajax({ 
      url: `/api/notes/${note.id}`, 
      type: 'PUT', 
      data: { note: note }, 
      success: () => {
        this.updateNote(note)
      }
    })

  },

  // View logic

  removeNote(id) {
     var filteredNotes = this.state.notes.filter((note) => { return note.id != id; }); 
     this.setState({ notes: filteredNotes });
  },

  receiveNote(newNote) {
    var allNotes = this.state.notes.concat(newNote)
    this.setState({notes: allNotes })
  },

  updateNote(editedNote) {
    var notes = this.state.notes.filter((n) => { 
      return n.id != editedNote.id 
    });

    notes.push(editedNote); 
    this.setState({notes: notes });
  },

  componentDidMount() { 
    $.getJSON('/api/notes.json', (response) => { 
      this.setState({ notes: response });
    });
  }, 

  render() { 
    return ( 
      <div> 
        <h1 className="col-lg-12 bg-primary">Hello, World!</h1>
        <NewNote receiveNote={this.receiveNote} />
        <AllNotes notes={this.state.notes} noteDeleted={this.noteDeleted} noteEdited={this.noteEdited} />
      </div> 
  )} 
});