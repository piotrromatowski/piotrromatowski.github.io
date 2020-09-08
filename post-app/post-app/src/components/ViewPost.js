import React, {Component} from 'react';
import './ViewPost.css'

class ViewPost extends Component{

    createPost=(post)=>{
       
        return <div key={post.id} className='allInputs'>
            <h2>{post.title}</h2>
            <p className='short'>{post.shortTitle}</p>
            <img src={post.imgPath} alt={post.imgDescription} className='picture'/>
            <span className='description'>{post.description}</span>
            <button onClick={()=>this.removePost(post)}>Usuń post</button>
        </div>
        
    }

    removePost=(post)=>{
        this.props.deletePost(post.id)
    }

    render(){
        let allPost = this.props.post
        let onePost = allPost.map(this.createPost)
        return <div>
            {onePost}
        </div>
    }
}

export default ViewPost;