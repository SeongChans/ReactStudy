import { useRef } from "react"

const useRefex = () => {
    const id = useRef(1);
    const setId = (n) => {
        id.current = n;
    }

    const printId = () => {
        console.log(id.current);
    }
    
    return (
        <div>
            useRefex.js
        </div>
    );
};

export default useRefex;