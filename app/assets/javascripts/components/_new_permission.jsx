var NewPermission = React.createClass({
  getInitialState() {
    return {
      permission: 1,
      permissionMessage: ""
    }
  },

  submitPerm() {
    var username = this.refs.username.value
    var noteID = this.refs.noteID.value

    $.ajax({ 
      url: '/api/permissions', 
      type: 'POST',
      beforeSend: $.rails.CSRFProtection,
      data: {
        permission: {
          level: this.state.permission,
          note_id: noteID
        },
        email: username
      },
      success: (xhr,status,response) => {
        this.props.receivePermission(response);
        this.setState({
          permissionMessage: "Your permission was successfully created."
        })
      },
      error: (response) => {
        this.setState({
          permissionMessage: "There was an error. Check that the email address is correct."
        })
      }
    });
  },

  createSelectItems() {
    var options = this.props.notes.map((note) => {
      return (
        <option key={note.id} value={note.id}>{note.title}</option>
      )
    })

    return options
  },

  setPermissions (e) {
    this.setState({permission: e.target.value})
  },

  render() { 
    return ( 
      <div>
        <div class="form_group">
          <label name="username">Enter the username of the user to share a note with.</label>
          <input name="username" ref="username" placeholder='username'></input>
        </div>

        <div class="form_group">
          <label name="username" name="note">Select a note to share.</label>
          <select ref="noteID" name='note'>
            {this.createSelectItems()}
          </select>
        </div>
          
        <div onChange={this.setPermissions}>
          <label name="level" name="note">Select type of access.</label>
          <input type="radio" value="1" name="level"/> Read
          <input type="radio" value="2" name="level"/> Write
        </div>

        <div class="form_group">
          <button onClick={this.submitPerm}>Submit</button>
        </div>

        <div class="permission-message">
          {this.state.permissionMessage}
        </div>
      </div> 
    ) 
  } 

});
