import React from "react";
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";

class EditAPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      title: "",
      body: "",
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount(){
    this.setState({
        ...this.state,
        id : this.props.post.id,
        title : this.props.post.title,
        body : this.props.post.body
    })
  }
  handleChange(e){
     let { name, value } = e.target
     this.setState({
         ...this.state,
         [ name ]: value
     }) 
  }
  handleSubmit(e){
      e.preventDefault()
      this.props.editPost(this.state)
      this.setState({
          ...this.state,
          id : '',
        title: '',
        body: ''
      })
      this.props.handleEdit()
  }
  render() {
    return (
      <Container fluid>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="postTitle">Title</Label>
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
            <Label for="postBody">Post</Label>
            <Input class="form-control"
              type="text"
              name="body"
              value={this.state.body}
              id="postBody"
              placeholder="please add your post"
              onChange={this.handleChange} ariaDescribedby="addon-wrapping"></Input>
          </FormGroup>
          <Button className="mt-4" color="success">
            Change Your Post
          </Button>
        </Form>
      </Container>
    );
  }
}

export default EditAPost;
