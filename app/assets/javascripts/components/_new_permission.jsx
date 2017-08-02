var NewPermission = React.createClass({
  getInitialState() {
    return {permission: 1}
  },

  submitPerm() {
    var username = this.refs.username.value
    var noteID = this.refs.noteID.value

    $.ajax({ 
      url: '/api/permissions', 
      type: 'POST',
      beforeSend: $.rails.CSRFProtection,
      data: { 
        note: { 
          user_id: noteID
        },
        email: username
      },
      success: (response) => {
        this.props.receivePermission(response);
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
        <label name="username">Enter the username of the user to share a note with.</label>
        <input name="username" ref="username" placeholder='username'></input>
        <label name="username" name="note">Select a note to share.</label>
        <select ref="noteID" name='note'>
          {this.createSelectItems()}
        </select>
        <label name="level" name="note">Select type of access.</label>
        <div onChange={this.setPermissions}>
          <input type="radio" value="1" name="level"/> Read
          <input type="radio" value="2" name="level"/> Write
        </div>
        <button onClick={this.submitPerm}>Submit</button> 
      </div> 
    ) 
  } 

});
