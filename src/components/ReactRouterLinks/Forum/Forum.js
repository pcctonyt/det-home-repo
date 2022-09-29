import React from 'react'
import { Container, Alert } from 'reactstrap'
import RenderPosts from './components/RenderPosts'
import AddAPost from "./components/AddAPost";
import { v4 as uuid } from "uuid";

/**********LOCAL STORAGE CODING************
//check to see if anything in local storage
//if not in local storage set to an empty array
//if undefined does not work, add or null */
if(JSON.parse(localStorage.getItem("posts")) === "undefined" || JSON.parse(localStorage.getItem("posts")) === null){
    localStorage.setItem("posts", JSON.stringify([]))
}
//get out whatever is in local storage
let detPosts = JSON.parse(localStorage.getItem("posts")) 
//console.log("FROM LOCAL STORAGE ", posts)



class Forum extends React.Component {
    constructor(){
        super()
        this.state = {
            posts : detPosts 
        }
        this.deletePost = this.deletePost.bind(this)
        this.addPost = this.addPost.bind(this)
        this.editPost = this.editPost.bind(this)
    }
    async componentDidMount(){
        // *********LOCAL STORAGE STATE CODE********
            console.log("THIS STATE CDM ", this.state.posts)
        //always copy state
        // posts:posts translates to posts ES6
        
        const data = await fetch('http://localhost:8000').then(response => response.json()).then(data => data)
        const onlySixteen = data.slice(0, 16)
        // this.setState({
        //     ...this.state,
        //     posts : onlySixteen
        // })
        if(detPosts.length < 1){
            this.setState({
            ...this.state,
            posts : onlySixteen
            })
        } else {
            this.setState({
                ...this.state,
                posts : detPosts
            })
        }
    }
    deletePost(id){
        let oneLessPost = this.state.posts.filter(post=>post.id !== id)
        this.setState({
            ...this.state,
            posts : oneLessPost
        })
    }
    addPost(post){
        post.id = uuid()
        console.log("ID ", post)
        this.setState({
            ...this.state,
            posts : [post, ...this.state.posts]
        })
    }
    editPost(post){
        let id = post.id
        let changedPost = this.state.posts.map(posting=>{
            if(id === posting.id){
                posting.title = post.title;
                posting.body = post.body
            }
            return posting
        })
        this.setState({
            ...this.state,
            posts : changedPost
        })
    }
    render(){
        let renderedPosts = this.state.posts.map(post=><RenderPosts post={post} deletePost={this.deletePost} key={post.id} editPost={this.editPost}/>)
        // ********UPDATING LOCAL STORAGE********
            //conditional rendering
        console.log("THIS STATE ", this.state)
        //update local storage EACH TIME state changes
        let newInfo = JSON.stringify(this.state.posts)
        console.log("NEW INFO", newInfo);
        if(newInfo !== [])
        {localStorage.setItem("posts", newInfo)}
        
        return(
            <Container>
                <AddAPost addPost={this.addPost}/>
                { this.state.posts.length < 1 ? <Alert color="success">There are no more posts</Alert>:renderedPosts }
            </Container>
        )
    }
}

export default Forum;