var NewNote = React.createClass({
	 getInitialState() {
    return {
      noteMessage: "" 
    }
  },

	submitNote() {
		var title = this.refs.title.value;
		var content = this.refs.content.value;

	 	$.ajax({ 
	 		url: '/api/notes', 
	 		type: 'POST',
	 		beforeSend: $.rails.CSRFProtection,
	 		data: { 
	 			note: { 
	 				title: title, 
	 				content: content
	 			}
	 		},
	 		success: (response) => {
	 			this.props.receiveNote(response);

	 			$('.new-note').find('input').val("");
	 			this.setState({
	 				noteMessage: "Your note '" + title + "' has been created."
	 			})
	 		}
	 	});


	},

	render() { 
		return ( 
			<div>
				<div class='new-note'> 
					<input ref="title" placeholder='Enter the name of the item'></input> 
					<input ref="content" placeholder='Enter a description'></input> 
					<button onClick={this.submitNote}>Submit</button>
					<div class="note-message">{this.state.noteMessage}</div>
				</div> 
			</div> 
		) 
	} 
});
