var AllNotes = React.createClass({
  render() { 

    var notes = this.props.notes.map(function (note) {
      return (
        <div className="note" key={note.id}>
          <p>{note.content}</p>
        </div>
      )
    })
    
    return ( 
      <div>
        {notes}
      </div> 
  )}

});