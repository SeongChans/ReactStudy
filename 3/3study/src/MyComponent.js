import PropTypes from "prop-types";


/* function twice(value) {
  return value * 2;    
}

const triple = (value) => value * 3;

function BlackDog(){
    this.name = "흰둥이";
    return{
        name : "검둥이",
        bark: function(){
            console.log(this.name + " : 멍멍!");
        }
    }
}

const blackDog = new BlackDog();
blackDog.bark();

function WhiteDog() {
    this.name = "흰둥이";
    return {
        name: "검둥이",
        bark: () => {
            console.log(this.name + " : 멍멍!");
        }
    }
}

const whiteDog = new WhiteDog();
whiteDog.bark();
*/

//비구조화 할당
/* const MyComponent = props => {
    const { name, children } = props
    return (
        <div>
            안녕하세요. 제 이름은 {name}입니다.<br />
            children 같은 {children}
            입니다.
        </div>
)};
MyComponent.defaultProps = {
    name: "기본 이름"
}; */

//비구조화 할당2
/*  const MyComponent = ({ name, children }) => {
    return (
        <div>
            안녕하세요. 제 이름은 {name}입니다.<br />
            children 같은 {children}
            입니다.
        </div>
)};
MyComponent.defaultProps = {
    name: "기본 이름"
};  */

//propTyoes 지정해주기
/*
const MyComponent = ({name, children}) => {
     return (
        <div>
            안녕하세요. 제 이름은 {name}입니다.<br />
            children 같은 {children}
            입니다.
        </div>
        )
     }
     MyComponent.defaultProps ={
        name : "기본 이름"
     };
     MyComponent.propTypes = {
        name : PropTypes.string, // 이렇게 설정하면 name값은 무조건 문자열 형태로 전달해야 된다.
        favoriteNumber: PropTypes.number.isRequired
    };
export default MyComponent;
*/

//클래스형 컴포넌트에서 props 사용하기
/*
import{Component} from "react"

class MyComponent extends Component {
    render() {
        const { name, favoriteNumber, children } = this.props;
        return(
            <div>
                안녕하세요. 제 이름은{name}입니다. <br />
                children 값은 {children}
                입니다.
                <br />
                제가 좋아하는 숫자는 {favoriteNumber}입니다.
            </div>
        );
    }
}

MyComponent.defaultProps = {
    name : '기본 이름'
};

MyComponent.propTypes = {
    name : PropTypes.string,
    favoriteNumber : PropTypes.number.isRequired
};

export default MyComponent;
*/
import{Component} from "react"

class MyComponent extends Component {
    static defaultProps = {
        name : '기본 이름'
    };
    static propTypes = {
        name : PropTypes.string,
        favoriteNumber : PropTypes.number.isRequired
    };

    render() {
        const { name, favoriteNumber, children } = this.props;
        console.log(name);
        return(
            <div>
                안녕하세요. 제 이름은{name}입니다. <br />
                children 값은 {children}
                입니다.
                <br />
                제가 좋아하는 숫자는 {favoriteNumber}입니다.
            </div>
        );
    }
}
export default MyComponent;