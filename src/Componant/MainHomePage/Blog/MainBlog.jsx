import React from 'react';
import Blog from './Blog';

const MainBlog = () => {
    return (
        <section id='mainblog' style={{backgroundColor:'#00BCD1', padding: '46px 0px', marginTop:'40px'}}>
            <div className="text-center">
                <h1 style={{color:'white', fontFamily:'sans-serif', fontWeight:'bolder', marginBottom:'25px'}}>Our Blog</h1>
            </div>
            <Blog/>
        </section>
    );
};

export default MainBlog;