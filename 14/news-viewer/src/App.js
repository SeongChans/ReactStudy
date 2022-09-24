/* import { useState } from 'react';
import axios from 'axios';


function App () {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try{
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=kr&apiKey=098636c34eaf463cadd2dea020445d66',
        );
      setData(response.data);
    } catch(e){
      console.log(e);
    };
  };
  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
        {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
      </div>
    </div>
  );
};

export default App;
 */
/* 
import NewsList from './components/NewsList'
import Categories from './components/Categories';
import { useState, useCallback } from 'react';

function App () {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback(category => setCategory(category), []);

  return (
    <>
      <Categories category={category} onSelect={onSelect}/>
      <NewsList category={category}/>
    </>
    );
};

export default App; */

import {Route, Routes} from 'react-router-dom';
import NewsPage from './components/NewsPage';

function App () {

  return (
    <Routes>
      <Route path="/" element={<NewsPage />} />
      <Route path="/:category" element={<NewsPage />} />
    </Routes>
  );
};

export default App;