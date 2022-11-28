import React from 'react';
import Comment from './Comment';

const userInfo = {
  name: 'Taras',
  avatarUrl: 'https://avatars.githubusercontent.com/u/27481981?v=4',
};

const App = () => {
  return <Comment author={userInfo} text="Good job!" date={new Date()} />;
};

export default App;
