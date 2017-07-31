var AllNotes = React.createClass({

  render() {
    var notes = this.props.notes.map((note) => {
      return (
        <div key={note.id} className="list-group-item">
          <Note type={this.props.type} note={note} noteDeleted={this.props.noteDeleted} noteEdited={this.props.noteEdited}/>
        </div>
      )
    })
    
    return ( 
      <div className="list-group">
        {notes}
      </div> 
    )
  }
});