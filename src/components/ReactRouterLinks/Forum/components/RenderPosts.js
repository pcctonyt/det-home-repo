import React from "react";
import { Card, Button, CardTitle, CardText, ButtonGroup } from "reactstrap";
import EditAPost from './EditAPost';
import "./Forum.css";

class RenderPosts extends React.Component {
  constructor(props){
    super(props)
    //one thing in state, ALWAYS save state in this.setState
    this.state = {
      isEdit: false
    }
    this.handleEdit = this.handleEdit.bind(this)
  }
  //all methods go betwee n constructor and render
  handleEdit(){
    this.setState(prevState=>{
      return{
        ...this.state,
        isEdit:!prevState.isEdit
      }
    })
  }
  render() {
    return (
      <Card className="text-center" body outline>
        <CardTitle tag="h5">{this.props.post.title}</CardTitle>
        <CardText>{this.props.post.body}</CardText>
        <ButtonGroup>
        <Button color="danger" id="delete-btn" onClick={()=>this.props.deletePost(this.props.post.id)}>Delete</Button>
        <Button color="primary" id="edit-btn" onClick={this.handleEdit}>Edit</Button>
        </ButtonGroup>
        { this.state.isEdit ? <EditAPost handleEdit={this.handleEdit} post={this.props.post} editPost={this.props.editPost}/> : null }
      </Card>
    );
  }
}

export default RenderPosts;
