import React from "react";
import {
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

class AddAPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(e){
    let { name, value } = e.target
    this.setState({
        ...this.state,
        [name]: value
    })
  }
  handleSubmit(e){
      e.preventDefault()
      this.props.addPost(this.state)
      this.setState({
          ...this.state,
          title: "",
          body: ""
      })
  }
  render() {
    return (
      <React.Fragment
        fluid
        className="text-center bg-dark text-light pb-4"
      >
        <Container fluid>
          <h1 className="display-3">Deterrence Posted Questions Forum</h1>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="postTitle">Deterrence Subject</Label>
              <Input
                type="text"
                name="title"
                id="postTitle"
                value={this.state.title}
                placeholder="title"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="postBody">Deterrence Question</Label>
              <Input
                
                type="text"
                name="body"
                value={this.state.body}
                id="postBody"
                placeholder="please add your question"
                onChange={this.handleChange}
              />
            </FormGroup>
            <Button className="mt-4"color="success">Add Post</Button>
          </Form>
        </Container>
      </React.Fragment>
    );
  }
}

export default AddAPost;
