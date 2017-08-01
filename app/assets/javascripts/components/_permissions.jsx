var Permissions = React.createClass({ 
  render() {    
  	var perms = this.props.permissions.map((permission) => {
      return (
        <div className="list-group-item" key={permission.id}>
        	<Permission permission={permission} key={permission.id} />
        </div>
      )
    })
      
    return (
      <div>
        <NewPermission  />
      	<div className="list-group">
      		{perms}	
      	</div>
      </div>
    ) 
  }
});
