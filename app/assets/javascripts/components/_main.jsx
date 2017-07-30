var Main = React.createClass({ 
  getInitialState() {
    return {
      notes: []
    }
  },

  receiveNote(newNote) {
    var allNotes = this.state.notes.concat(newNote)
    this.setState({notes: allNotes })
  },

  componentDidMount() { 
    var that = this

    $.getJSON('/api/notes.json', function (response) { 
      that.setState({ notes: response });
    }.bind(that));
  }, 

  render() { 
    return ( 
      <div> 
        <h1 className="col-lg-12 bg-primary">Hello, World!</h1>
        <NewNote receiveNote={this.receiveNote} />
        <AllNotes notes={this.state.notes} />
      </div> 
  )} 
});