import React from 'react';
import Card from 'react-bootstrap/Card';
import img1 from '../../images/blog/blog3.webp'
import '../Blog/Blog.css'
const Blog_3 = () => {
    return (
        <>
              <Card style={{ width: '18rem', boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}} className='mx-auto homepage'>
      <Card.Img variant="top" src={img1} style={{ height: '14rem', padding:'15px'}}/>
      <Card.Body>
        
        <Card.Text style={{color: 'black', fontSize:'20px', textAlign:'center'}}>
        Living with Thalassemia - causes,...
        </Card.Text> 
      </Card.Body>
    </Card>
        </>
    );
};

export default Blog_3;