/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import userEvent from '@testing-library/user-event';

function App() {

  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬독학'])
  let [따봉, 따봉변경] = useState(0);
  
  return (
    <div className="App">
      <div class="black-nav">
        <h4>블로그임</h4>
      </div>

      <button onClick={() => {
        글제목변경(['여자 코트 추천', '강남 우동 맛집', '파이썬독학'])

      }}>글수정</button>
      <div className="list">
        <h4>{ 글제목[0] } <span onClick={()=>{ 따봉변경(따봉+1) } }>👍</span> { 따봉 } </h4> 
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
