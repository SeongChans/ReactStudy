import { useParams } from "react-router-dom";
//URL파라매터는 useParams라는 Hook을 사용해 객체 형태로 조회할 수 있다.
//URL파라매터의 이름은 라우트 설정 때 Route컴포넌트의path props를 통해 설정
const data = {
    velopert: {
        name: '김계란',
        description: '헬창 빡빡이'
    },
    gildong: {
        name: '홍Kill동',
        description: '정의의 사나이'
    },
};

const Profile = () => {
    const params = useParams();
    const profile = data[params.username];

    return(
        <div>
            <h1>사용자 프로필</h1>
            {profile ? (
                <div>
                    <h2>{profile.name}</h2>
                    <p>{profile.description}</p>
                </div>
            ):(
            <p>존재하지 않는 프로필입니다.</p>
            )}
        </div>
    );
};

export default Profile;