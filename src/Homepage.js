import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import "./SearchInput.css";
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Homepage extends Component {
    
    state = {
        val: ""
      };

      onSubmit = () => {
        fetch(this.state.val)
        .then((response) => console.log(response))
      };
  
  render() {
    return (
        <div className="form-row">
        <div className="col-md-6">
<Form className="component-search-input">
    <Form.Control onChange={e => this.setState({ val: e.target.value })} value={this.state.val}  type="text" placeholder="Enter URL of video" />
    </Form>
</div>
<div className="md-4">
  <Button variant="primary" type="submit" onClick={this.onSubmit}>
    Submit
  </Button>
</div>

</div>
    );
  }
}