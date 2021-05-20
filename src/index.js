import ReactDOM from 'react-dom';
import React from 'react';
import PostingLayout from './components/posting-layout';

const App = () => {
 return <div>
     <h1>FMarket 😇</h1>
     <p>"We publish your text on bittorrent"</p>
     <div>
         <PostingLayout></PostingLayout>
        </div>
 </div>;
 }
ReactDOM.render(<App />, document.getElementById('app'));