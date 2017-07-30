var AllNotes = React.createClass({
  deleteNote(id) {
    this.props.noteDeleted(id)
  },

  render() { 
    var notes = this.props.notes.map((note) => {

      return (
        <div className="note" key={note.id}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <button onClick={this.deleteNote.bind(this, note.id)}>DELETE</button>          
        </div>
      )
    })
    
    return ( 
      <div>
        {notes}
      </div> 
  )}

});