import './App.css';
import {Routes,Route} from 'react-router-dom';
import About from './pages/About';
import Home from './pages/home';
import Profile from './pages/Profile';
import Articles from './pages/articles';
import Article from './pages/Article';
import Layout from './Layout';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import MyPage from './pages/Mypage';

// <Routes>
// <Route path="주소규칙" element={보여 줄 컴포넌트 jsx} />
// </Routes>
// Route컴포넌트는 Routes컴포넌트 내부에서 사용되어야 한다.

// index라는 props가 있음 = path="/" 동일한 의미임
// 상위라우트의 경로와 일치하지만 그 이후의 경로가 주어지지 않았을 때 보여지는 라우트를 설정할 수 있다.
// Route에서 * 표시는 wildcard문자 아무텍스트나 매칭한다.
// 엘리먼트의 상단에 위치하는 라우트들의 규칙을 모두 확인하고, 일치하는 라우트가 없다면
// 이 라우트가 화면에 나타납니다.
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} /> 
        <Route path="/About" element={<About />} />
        <Route path="/profiles/:username" element={<Profile />} />
      </Route>
      <Route path="/articles" element={<Articles />}>
        <Route path=":id" element={<Article />} />  
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/MyPage" element={<MyPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
