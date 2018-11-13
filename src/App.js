/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "materialize-css"; // It installs the JS asset only
import "materialize-css/dist/css/materialize.min.css";
import ControlLabel from "react-bootstrap/lib/ControlLabel";
import FormControl from "react-bootstrap/lib/FormControl";
import FormGroup from "react-bootstrap/lib/FormGroup";
import "./App.css";

//converting our markdown into html
var marked = require("marked");

class App extends Component {
  state = {
    markdown: ""
  };

  UpdateMarkDown = markdown => {
    this.setState({
      markdown
    });
  };

  // onchange - everytime we click the keystroke going to change
  render() {
    var { markdown } = this.state;
    console.log(markdown);

    return (
      <footer>
        <div className="App container">
          <div>
            <FormGroup controlId="formControlsText" type="text">
              <ControlLabel>Markdown Input</ControlLabel>
              <FormControl
                componentClass="textarea"
                placeholder="Enter markdown"
                value={markdown}
                onChange={event => this.UpdateMarkDown(event.target.value)}
              >
                {" "}
              </FormControl>
            </FormGroup>
          </div>
          <div>
            <div className="col s12 m2">
              <p className="z-depth-5">by Tiago</p>
            </div>
            <h2>Markdown Output</h2>

            <div dangerouslySetInnerHTML={{ __html: marked(markdown) }} />

            <a class="btn-floating btn-large cyan pulse">
              <i class="material-icons">edit</i>
            </a>
            <div />
            <br />
            <div className="footer-copyright">
              <div className="container">© 2018 Not Copyright Text</div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default App;
