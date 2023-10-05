import React from 'react';
import Card from 'react-bootstrap/Card';
import img1 from '../../images/blog/blog6.webp'
import '../Blog/Blog.css'
const Blog_6 = () => {
    return (
        <>
              <Card style={{ width: '18rem', boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}} className='mx-auto homepage'>
      <Card.Img variant="top" src={img1} style={{ height: '14rem', padding:'15px'}}/>
      <Card.Body>
        
        <Card.Text style={{color: 'black', fontSize:'20px', textAlign:'center'}}>
        A Complete Guide on Peptic Ulcer Disease
        </Card.Text> 
      </Card.Body>
    </Card>
        </>
    );
};

export default Blog_6;