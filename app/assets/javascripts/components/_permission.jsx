var Permission = React.createClass({ 
  getInitialState() {
    return {editable: false}
  },

  showPerm() {
    if (this.state.editable) {
      return (
        <div>
          <label name="level">Enter 1 for read permissions and 2 for write permissions</label>
          <input name="level" ref='permissionLevel' type='integer' defaultValue={this.props.permission.level} />
        </div>
      )
    } else {
    	if (this.props.permission.level == 1) {
    		return "Read"
    	} else {
    		return "Write"
    	}
    }
  },

  editPermission() {
    if (this.state.editable) {
      var id = this.props.permission.id
      var level = this.refs.permissionLevel.value
      var permission = {id: id, level: level};
      this.props.permissionEdited(permission);
    }

    this.setState({editable: !this.state.editable})
  },

  renderButtons() {
    return (
      <div>
        <button onClick={this.editPermission}>{this.state.editable ? 'Submit' : 'Edit' }</button>
        <button onClick={this.props.permissionDeleted.bind(null, this.props.permission.id)}>DELETE</button>  
      </div>
    )
  },

  render() {
    return ( 
  		<div className="list-group-item">
        <div>{this.props.permission.username}</div>
  		  <div>{this.showPerm()}</div>
  		  <div>{this.props.permission.title}</div>
        {this.renderButtons()}
      </div>
    ) 
  }

});
