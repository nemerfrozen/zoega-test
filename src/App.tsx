import React, { useState, useEffect } from 'react';
import { getAllPost, deletePost } from './services/http';
import './App.css';

//import Components
import Nav from './components/NavComponent';
import Card from './components/CardComponent';
import Modal from './components/ModalComponent';


interface PostJson {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function App() {
  // array of Post
  const [post, setPost] = useState<PostJson[]>([]);
  const [open, setOpen] = useState(false)

  //const cancelButtonRef = useRef(null)

  //get Post interface 
  const ListPost = async () => {
    const response = await getAllPost();
    setPost(response.data);
  }

  useEffect(() => {
    ListPost();
  }, []);

  return (
    <>
    
      <Nav setOpen={setOpen} />
      <hr />
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-2 sm:grid-cols-1">
      {post.map((post: PostJson) => (
        <Card key={post.id} post={post} />
          ))}
          </div>+
      </div>
      <Modal open={open} setOpen={setOpen} />

       
    </>
  );
}

export default App;
