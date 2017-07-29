var AllItems = React.createClass({
	getInitialState() {
		return {
			notes: []
		}
	},

	componentDidMount() { 
		console.log('Component mounted');

		var that = this

	    $.getJSON('/api/notes.json', function (response) { 
	  		that.setState({ notes: response });
	  		debugger 
	  	}.bind(that));


	}, 

	render() { 

		var notes = this.state.notes.map(function (note) {
			return (
				<div className="note" key={note.id}>
					<p>{note.content}</p>
				</div>
			)
		})
		
		return ( 
			<div>
				{notes}
			</div> 
	)}


});