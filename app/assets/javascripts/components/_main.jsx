var Main = React.createClass({ 
  getInitialState() {
    return {
      notes: [],
      writableNotes: [],
      readableNotes: [],
      permissions: []
    }
  },

  // Model manipulation

  // Notes
  componentDidMount() { 
    $.getJSON('/api/notes.json', (response) => {
      this.setState({ 
        notes: response.notes,
        writableNotes: response.writable,
        readableNotes: response.readable
      });
    });

    $.getJSON('/api/permissions.json', (response) => {
      this.setState({
        permissions: response
      })
    })

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

  // Permissions

  permissionEdited() {

  },

  permissionDeleted() {

  },

  // View logic

  // Notes
  removeNote(id) {
     var filteredNotes = this.state.notes.filter((note) => { return note.id != id; }); 
     this.setState({ notes: filteredNotes });
  },

  receiveNote(newNote) {
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

  // Permissions

  receivePermission(newPerm) {
    var allPerms = this.state.permissions.concat(newPerm);
    this.setState({permissions: allPerms})
  },

  render() { 
    return ( 
      <div> 
        <h1 className="col-lg-12 bg-primary display-2">Notes Application</h1>
        
        <h2>Add A Note</h2>
        <NewNote receiveNote={this.receiveNote} />

        <h2>My Notes</h2>
        <AllNotes type="notes" notes={this.state.notes} noteDeleted={this.noteDeleted} noteEdited={this.noteEdited} />
        
        <h2>Shared Notes</h2>
        <AllNotes type="readableNotes" notes={this.state.readableNotes} noteDeleted={this.noteDeleted} noteEdited={this.noteEdited} />
        
        <h2>Writable Shared Notes</h2>
        <AllNotes type="writableNotes" notes={this.state.writableNotes} noteDeleted={this.noteDeleted} noteEdited={this.noteEdited} />

        <h2>Note Permissions</h2>
        <Permissions receivePermission={this.receivePermission} permissions={this.state.permissions} />
      </div> 
  )} 
});