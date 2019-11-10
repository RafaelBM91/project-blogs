import React from 'react';
import Wrapper from '../providers';

import { Nav } from '../components/nav';
import { Top } from '../components/top';
import { Footer } from '../components/footer';
import { PostList } from '../components/postsList';

import 'bulma/css/bulma.css';

const Home = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <Top />
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <Nav />
        <div style={{width: 'calc(100% - 290px)', paddingTop: '10px'}}>
          <PostList />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Wrapper(Home);
