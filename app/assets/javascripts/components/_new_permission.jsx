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

  createSelectItems() {
    var options = this.props.notes.map((note) => {
      return (
        <option key={note.id} value={note.id}>{note.title}</option>
      )
    })

    return options
  },

  render() { 
    return ( 
      <div> 
        <input ref="username" placeholder='Enter the email of the user'></input> 
        <select ref="noteID">
          {this.createSelectItems()}
        </select>
        <input type="number" ref="level" placeholder='Enter the id of the note.'></input> 
        <button onClick={this.submitPerm}>Submit</button> 
      </div> 
    ) 
  } 

});
