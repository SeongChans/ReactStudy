/* 
import { ColorConsumer } from "../api/color";

const ColorBox = () => {
    return (
        <ColorConsumer>
            {({state}) => (
                <>
                <div
                    style={{
                        width: '64px',
                        height: '64px',
                        background: state.color
                    }}
                />  Function as a child / Render Props라고 함 -> JSX 혹은 문자열이 아닌 함수를 전달 
                <div 
                style= {{
                    width: '32px',
                    height:'32px',
                    background: state.subcolor
                }}/>
                </>
            )}
        </ColorConsumer>
    );
};

export default ColorBox; 
*/

import { useContext } from 'react';
import ColorContext from '../api/color';

const ColorBox = () => {

    const { state } = useContext(ColorContext);
    return (
        <>
            <div
                style={{
                    width: '64px',
                    height: '64px',
                    background: state.color
                }}
             />
             <div
                style={{
                    width: '32px',
                    height: '32px',
                    background: state.subcolor
                }}
             />
        </>
    );
};

export default ColorBox; 