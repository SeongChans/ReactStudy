import useInputs from "./useInputs";

const Info = () => {
        const [state, onChange] = useInputs({
            name : '',
            nickname : ''
        });
    

    const {name, nickname } = state;

    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange} />
                <input name="nickname" value={nickname} onChange={onChange} />
            </div>
            <div>
                <div>
                    <b>이름 : </b>{name}
                </div>
                <div>
                    <b>닉네임 : </b>{nickname}
                </div>
            </div>
        </div>
    );
}
/* 
    const Info = () => {
    const [name, setName] = useState('')
    const [nickname, setNickname] = useState('');
    useEffect(() => {
        console.log("랜더링이 완료되었습니다.");
        return() => {
            console.log('cleanUp');
            console.log({name, nickname});
        };
    },[])
    //두번째 파라매터로 비어있는 배열을 넣으면 처음 랜더링 + 언마운트 때만 실행됨
    // 값을 넣을경우 전달되는 배열이 변경될 떄마다 작업을 수행함 
    const onChangeName = e => {
        setName(e.target.value)
    };

    const onChangeNickname = e => {
        setNickname(e.target.value);
    };

    return(
        <>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNickname} />
            </div>
            <div>
                <div>
                    <b>이름 : </b>{name}
                </div>
            </div>
                <div>
                    <b>닉네임:</b>{nickname}
                </div>
        </>
    );
};
 */
export default Info;