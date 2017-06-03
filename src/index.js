import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import Autocomplete from 'react-autocomplete/build/lib/index';

class Game extends React.Component {
  constructor() {
    super();
    let repos = ["repo1", "repo2", "repo3", "repo4"];
    this.state = {
      repositoryName: repos[Math.floor(Math.random()*repos.length)],
      correctOrNot: ""
    };
  }
  clickHandler(i) {
    if(i === 1) {
      this.setState({correctOrNot: "Correct!"});
    } else {
      this.setState({correctOrNot: "Wrong!"});
    }
  }
  render() {
    return (
      <div class="container">
        <div class="jumbotron">
            <br/><br/>
            <div class="form-group">
              <label for="repositoryName">Repository Name</label>
              &nbsp;
              <span id="repositoryName">{this.state.repositoryName}</span>
            </div>
            <br/><br/>
            <div class="form-group">
              <label for="contributorName">Contributor</label>
              <Autocomplete
                getItemValue={(item) => item.label}
                items={[
                  { label: 'apple' },
                  { label: 'banana' },
                  { label: 'pear' }
                ]}
                renderItem={(item, isHighlighted) =>
                  <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                    {item.label}
                  </div>
                }
                value={this.value}
                onChange={(e) => this.value = e.target.value}
                onSelect={(val) => this.value = val}
              />
            </div>
            <br/><br/>
            <button type="submit" class="btn btn-lg btn-default" onClick={() => this.clickHandler(0)}>Guess</button>
          <br/><br/>
          <span id="correctOrNot">{this.state.correctOrNot}</span>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
