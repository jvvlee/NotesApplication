var Note = React.createClass({ 
  getInitialState() {
    return {editable: false}
  },

  editNote() {
    if (this.props.type == "readableNotes") {
      return
    }

    if (this.state.editable) {
      var title = this.refs.title.value
      var content = this.refs.content.value
      var id = this.props.note.id
      var note = {id: id, content: content, title: title};
      this.props.noteEdited(note, this.props.type);
    }

    this.setState({editable: !this.state.editable})
  },

  renderButtons() {
    switch(this.props.type) {
    case "readableNotes":
        return (<div></div>)
        break;
    case "writableNotes":
        return (
          <button onClick={this.editNote}>{this.state.editable ? 'Submit' : 'Edit' }</button>
        )
        break;
    default:
        return (
          <div>
            <button onClick={this.editNote}>{this.state.editable ? 'Submit' : 'Edit' }</button>
            <button onClick={this.props.noteDeleted.bind(null, this.props.note.id)}>Delete</button>     
          </div>
        )
    } 
  },

  render() { 
    var title = this.state.editable ? <input ref='title' type='text' defaultValue={this.props.note.title} /> : <h3>{this.props.note.title}</h3>;
    var content = this.state.editable ? <input ref='content' type='text' defaultValue={this.props.note.content} />: <p>{this.props.note.content}</p>;

    return ( 
      <div className="note">
        {title}
        {content}
        
        {this.renderButtons()}
      </div>
    ) 
  },


});
