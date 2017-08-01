var Permission = React.createClass({ 
  getInitialState() {
    return {editable: false}
  },

  showPerm() {
  	if (this.props.permission.level == 1) {
  		return "Read"
  	} else {
  		return "Write"
  	}
  },

  render() { 
    return ( 
    	<div key={this.props.permission.id}>
    		<div>{this.props.permission.username}</div>
    		<div>{this.showPerm()}</div>
    		<div><span>Note ID: </span>{this.props.permission.note_id}</div>
    	</div>
    ) 
  }

});
