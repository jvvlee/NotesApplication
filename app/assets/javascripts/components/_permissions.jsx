var Permissions = React.createClass({ 
  render() {    
  	var perms = this.props.permissions.map((permission) => {
      return (
        <Permission permission={permission} key={permission.id}/>
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
