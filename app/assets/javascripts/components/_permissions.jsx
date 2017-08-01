var Permissions = React.createClass({ 
  render() {    
  	var perms = this.props.permissions.map((permission) => {
      return (
        <div key={permission.id}>
          <div className="list-group-item">
        	 <Permission permission={permission} />
          </div>
        </div>
      )
    })
      
    return (
      <div>
        <NewPermission />
    	  <div className="list-group">
    		  {perms}	
        </div>
      </div>
    ) 
  }
});
