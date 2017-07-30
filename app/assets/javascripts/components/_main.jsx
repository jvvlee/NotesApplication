var Main = React.createClass({ 
  getInitialState() {
    return {
      notes: []
    }
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

  removeNote(id) {
     var filteredNotes = this.state.notes.filter((note) => { return note.id != id; }); 
     this.setState({ notes: filteredNotes });
  },

  noteEdited(id) {
    
  },


  receiveNote(newNote) {
    var allNotes = this.state.notes.concat(newNote)
    this.setState({notes: allNotes })
  },

  componentDidMount() { 
    var that = this

    $.getJSON('/api/notes.json', function (response) { 
      that.setState({ notes: response });
    }.bind(that));
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