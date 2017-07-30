var NewNote = React.createClass({ 
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
	 		}
	 	});
	},

	render() { 
		return ( 
			<div> 
				<input ref="title" placeholder='Enter the name of the item'></input> 
				<input ref="content" placeholder='Enter a description'></input> 
				<button onClick={this.submitNote}>Submit</button> 
			</div> 
		) 
	} 
});
