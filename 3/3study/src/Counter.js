import { Component } from "react";

class Counter extends Component {
/*    //컴포넌트 생성자 매소드 (state등록의 1번 방식)
     constructor(props) {
        //constructor를 작성할 때는 반드시 super를 호출해 주어야 한다.
        super(props);
        //state의 초깃값 설정하기 state는 객체형식이어어야 한다.
        this.state = {
            number : 0,
            fixedNumber: 0
        };
    } 
*/
    //state등록 2번 방식
    state ={
        number : 0,
        fixedNumber : 0
    };
    render(){
        const { number, fixedNumber } = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값 : {fixedNumber}</h2>
                <button
                 onClick={() => {
                    this.setState({number : number + 1 },
                        () => {
                            console.log("방금 setState가 호출되었습니다.");
                            console.log(this.state);
                        });
                    // 1번 방법 (객체로 가져오기)
                    this.setState((prevState, props) => {
                        return{
                            number : prevState.number + 1
                        };
                    })
                    /*       2번 방법 (객체로 가져오기) 
                            화살표 함수에서 바로 객체를 반환하도록 했기 때문에
                            prevState => ({})형태로 코드가 이루어짐
                            this.setState(prevState => ({
                            number : prevState.number + 1
                        })
                    ); */
                    }}> + 1 </button>
                {/*onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.
                this.setState를 사용하여 state에 새로운 값을 너을 수 있습니다.*/}
        </div>
    )
    };
}
export default Counter;