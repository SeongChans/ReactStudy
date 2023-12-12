import { useLocation } from "react-router-dom";
//location 객체를 반환한다. 현재 사용자가 보고 있는 페이지의 정보를 지니고 있음
/* pathname: 현재 주소의 경로)쿼리스트링 제외
   search: 맨 앞의 ? 문자를 포함한 쿼리스트링 값
    hash: 주소의 # 문자열 뒤의 값 (주로 History API가 지원되지 않는 구형 브라우저에서 클라이
        언트 라우팅을 사용할 떄 쓰는 해시 라우터에서 사용)
    state: 페이지를 이동할 때 임의로 넣을 수 있는 상태 값
    key: location 객체의 고유 값, 초기에는 default이며 펭지가 변경 될 때마다 고유의 값이 생성됨*/
import { useSearchParams } from "react-router-dom";
// useSearchParams는 배열 타입의 값을 반환 
/* 첫번째 원소는 쿼리파라매터를 조회하거나 수정하는 매서드들이 담긴 객체를 반환
    get 매서드를 통해 쿼리 파라매터를 조회할 수 있다
    set 매서드를 통해 쿼리 파라매터를 업데이트 할 수 있다.
    조회시 쿼리 파라매터가 존재하지 않는다면 null로 조회
   두번째 원소는 쿼리파라매터를 객체 형태로 업데이트 할 수 있는 함수를 반환
   주의 : 쿼리 파라매터를 조회할 때 값은 무조건 문자열 타입 */

const About = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const detail = searchParams.get('detail');
    const mode = searchParams.get('mode');
    const location = useLocation();

    const onToggleDetail = () => {
        setSearchParams({ mode, detail: detail === 'true' ? false: true });
    };

    const onIncreaseMode = () => {
        const nextMode = mode === null ? 1 : parseInt(mode) + 1;
        setSearchParams({mode: nextMode, detail });
    }
    return(
        <div>
            <h1>소개</h1>
            <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
            <p>쿼리 스트링: {location.search}</p>
            <p>mode: {mode} </p>
            <button onClick={onToggleDetail}>Toggle detail</button>
            <button onClick={onIncreaseMode}>mode + 1</button>
        </div>
    );
};

export default About;