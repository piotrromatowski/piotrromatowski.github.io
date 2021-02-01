import React, {Component} from 'react';
import Axios from 'axios';
import ViewPost from './ViewPost'


class GetPost extends Component {

    constructor(props){
        super(props);
        this.state={
            post:[
                {

                }
            ],
            canUpDate: false
        }
    }

    getPost(){
        Axios.get('http://ak108.developer-lc.pl/api/ak108/blog.php')
        .then(res=>{
           if(res.data.length > 0){
            this.setState({
                post: res.data
            })
           }
        })
            
            
    }

    deletePost = (idPost)=>{
        let post = {
            data:{
                id : idPost
            }
            
        }
        Axios.delete('http://ak108.developer-lc.pl/api/ak108/blog_delet.php', post)
        .then(res=>{
            this.setState({
                canUpDate: true
            })
        })
        this.getPost()
        
    }

    componentDidMount(){
        this.getPost()
    }
    componentWillUpdate(prevProps, prevState) {
        if(prevState.canUpDate !==this.state.canUpDate){
            this.getPost()

            this.setState({
                    canUpDate:false
            })
        }
        this.getPost()
    }
    


    render(){
        return (
            <div>
                <ViewPost post={this.state.post} deletePost= {this.deletePost}></ViewPost>
            </div>
        )
    }

}

export default GetPost;