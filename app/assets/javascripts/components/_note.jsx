var Note = React.createClass({ 
  getInitialState() {
    return {editable: false}
  },

  editNote() {
    if (this.state.editable) {
      var title = this.refs.name.value
      var content = this.refs.content.value
      console.log('in editNote', this.state.editable, title, content);
    }

    this.setState({editable: !this.state.editable})
  },

  render() { 
    var title = this.state.editable ? <input ref='title' type='text' defaultValue={this.props.note.title} /> : <h3>{this.props.note.title}</h3>;
    var content = this.state.editable ? <input ref='content' type='text' defaultValue={this.props.note.content} />: <p>{this.props.note.content}</p>;
      
    return ( 
      <div className="note">
        {title}
        {content}
        
        <button onClick={this.editNote}>{this.state.editable ? 'Submit' : 'Edit' }</button>
        <button onClick={this.props.noteDeleted.bind(this, this.props.note.id)}>DELETE</button>          
      </div>
    ) 
  },


});
