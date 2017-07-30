var AllNotes = React.createClass({

  render() { 
    var notes = this.props.notes.map((note) => {
      return (
        <div key={note.id}>
          <Note note={note} noteDeleted={this.props.noteDeleted} noteEdited={this.props.noteEdited}/>
        </div>
      )
    })
    
    return ( 
      <div>
        {notes}
      </div> 
    )
  }

});