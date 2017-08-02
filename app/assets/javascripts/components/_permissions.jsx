var Permissions = React.createClass({ 
  render() {    
  	var perms = this.props.permissions.map((permission) => {
      return (
        <Permission permission={permission} key={permission.id} receivePermission={this.props.receivePermission} permissionEdited={this.props.permissionEdited} permissionDeleted={this.props.permissionDeleted}/>
      )
    })
      
    return (
      <div>
    	  <div className="list-group">
    		  {perms}	
        </div>
      </div>
    ) 
  }
});
