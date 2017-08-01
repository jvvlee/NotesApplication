var Permission = React.createClass({ 
  getInitialState() {
    return {editable: false}
  },

  showPerm() {
    if (this.editable) {
      return (
        <input ref='permissionLevel' type='integer' defaultValue={this.props.note.level} />
      )
    } else {
    	if (this.props.permission.level == 1) {
    		return "Read"
    	} else {
    		return "Write"
    	}
    }
  },

  renderButtons() {
    <button onClick={this.editPermission}>{this.state.editable ? 'Submit' : 'Edit' }</button>
    <button onClick={this.props.noteDeleted.bind(null, this.props.note.id)}>DELETE</button>  
  },

  render() {
    return ( 
  		<div className="list-group-item">
        <div>{this.props.permission.username}</div>
  		  <div>{this.showPerm()}</div>
  		  <div>{this.props.permission.title}</div>
      </div>
    ) 
  }

});
