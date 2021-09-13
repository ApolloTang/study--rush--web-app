import React from 'react';
import img from './react.png';
// import MyButton from '@mylibs/ui--button';
import s from './style.module.less';
import Component1 from '@myscope/ui--component-1';

import FontTest from '../font-test/';
const App = () => (
  <div className={`${s.app}`}>
    <h1>Hello React</h1>
    {/* <div><MyButton>mybutton</MyButton> </div> */}
    <div className={`${s.imageContainer}`}><img src={img} /></div>
    <Component1 />
    <FontTest />
  </div>
);

export default App;
