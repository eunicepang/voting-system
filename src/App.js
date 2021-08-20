import Candidate from "./components/Candidate";
import Modal from "./components/Modal";
import Backdrop from "./components/Backdrop";
import React from "react";
import Table from "./components/Table";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      voteCountJen: 0,
      voteCountKen: 0,
      voteCountAshley: 0,
      voteRecord: [
        { id: "", candidate: "", date: "" },
      ],
      modalIsOpen: false,
      voterID: '',
      errorMessage: '',
      currentDate: Date().toLocaleString()
    };

    this.deleteHandler = this.deleteHandler.bind(this);
    this.closeModalHandler = this.closeModalHandler.bind(this);
    this.addVoteJen = this.addVoteJen.bind(this);
    this.addVoteKen = this.addVoteKen.bind(this);
    this.addVoteAshley = this.addVoteAshley.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  deleteHandler() {
    this.setState({ modalIsOpen: true });
  }

  closeModalHandler() {
    this.setState({ modalIsOpen: false });
  }

  addVoteJen() {
    this.setState({ voteCountJen: this.state.voteCountJen + 1 });
    this.setState({voteRecord : this.state.voteRecord.concat([{id: this.state.voterID, candidate: "Jen", date: this.state.currentDate}])});
  }

  addVoteKen() {
    this.setState({ voteCountKen: this.state.voteCountKen + 1 });
    this.setState({ voteRecord : this.state.voteRecord.concat([{id: this.state.voterID, candidate: "Ken", date: this.state.currentDate}])});
  }

  addVoteAshley() {
    this.setState({voteCountAshley: this.state.voteCountAshley + 1 });
    this.setState({voteRecord : this.state.voteRecord.concat([{id: this.state.voterID, candidate: "Ashley", date: this.state.currentDate}])});
  }

  handleChange(event) {
    this.setState({voterID: event.target.value});
  }

  render() {
    return (
      <div>
        <h2>Blockchain Voting System</h2>
        <h3>Powering the future of voting</h3>
        <button id="moreinfo" onClick={this.deleteHandler}>
          Learn More about Blockchains
        </button>
        <br></br>
        <br></br>
        <h4>Please enter your designated voter ID to vote:</h4>
        <input id="voterid" type="text" placeholder="Voter ID" value={this.state.healthID} onChange={this.handleChange}/>
        <br></br>
        <br></br>
        {this.state.modalIsOpen && (
          <Modal
            onCancel={this.closeModalHandler}
            onConfirm={this.closeModalHandler}
          />
        )}
        {this.state.modalIsOpen && (
          <Backdrop onClick={this.closeModalHandler} />
        )}
        <h2>Candidates</h2>
        <Candidate
          name="Jen"
          vote={this.state.voteCountJen}
          addVote={this.addVoteJen}
        />
        <Candidate 
          name="Ken" 
          vote={this.state.voteCountKen}
          addVote={this.addVoteKen} />
        <Candidate 
          name="Ashley" 
          vote={this.state.voteCountAshley}
          addVote={this.addVoteAshley} />
        <br></br>
        <h2>Vote Record</h2>
        <Table data={this.state.voteRecord} />
      </div>
    );
  }
}

export default App;
