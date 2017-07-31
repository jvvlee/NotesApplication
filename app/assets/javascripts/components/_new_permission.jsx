var NewPermission = React.createClass({ 

  submitNote() {
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

  render() { 
    return ( 
      <div> 
        <input ref="username" placeholder='Enter the email of the user'></input> 
        <input ref="noteID" placeholder='Enter the id of the note.'></input>
        <input type="number" ref="level" placeholder='Enter the id of the note.'></input> 
        <button onClick={this.submitPerm}>Submit</button> 
      </div> 
    ) 
  } 

});
