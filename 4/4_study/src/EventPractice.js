import { useState} from "react"

const EventPractice = () => {
    const [state, setState] = useState([
        {
        username: "",
        message: ""},
        ]);
    const {username, message} = state;
    //Property Initializer Syntax를 이용한 매서드 작성(화살표 함수)
    const handleChange = (e) =>{
        setState({...state, [e.target.name]: e.target.value});
        //객체 안에서 key를 []로 감싸면 그 안에 넣은 레퍼런스가 가리키는 실제 값이 key값으로 사용됨
        /*ex) const name = 'variantKey'
                const object = {
                    [name] : 'value'
                결과값 'variantKey: 'value'
                }
                */
    };

    const handleClick = () =>{
        alert(username + " : " + message);
        setState({
            username: "",
            message: ""
        });
    }
    
    const handleKeyPress = (e) => {
        if(e.key === "Enter"){
            handleClick();
        };
    }
    return(
        <>
        <h1>이벤트 연습</h1>
        <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        />

        <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        value={message}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
            /* (e) => { //e라는 객체는 SyntheticEvent로 웹 브라우저의 네이티브 이벤트를 감싸는 객체
                        //이벤트가 끝나고 나면 이벤트가 초기화 됨 / 정보를 참조할 수 없다.
                        // 비동기적으로 참조할 경우 e.persist() 함수를 호출해야한다.
                console.log(e.target.value)
                setState({
                    message: e.target.value})
            }
            //내부에서 화살표 함수를 설정에서 바로 사용 가능 */
        />
        <button
        onClick={handleClick
         /*    () => {
            alert(state.message);
            setState({
                message: ""
            });
        } */
        }>확인</button>
        </>
    );
};
export default EventPractice;
