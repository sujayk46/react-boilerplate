import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import reduxLogo from "../assets/svgs/redux.svg";
import tailwindLogo from "../assets/svgs/tailwindcss.svg";
import muiLogo from "../assets/svgs/material.svg";

import "../styles/App.css";
import { RootState, useAppDispatch } from "../store/store.init";
import { decrement, increment, incrementByAmount } from "../store/slices/counter.slice";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";

function Demo() {
    const dispatch = useAppDispatch();
    
    const count = useSelector((state: RootState) => state.counter.value);

    const handleIncrement = () => {
        dispatch(increment());
    };

    const handleDecrement = () => {
        dispatch(decrement());
    };

    const handleIncrementByAmount = (amount: number) => {
        dispatch(incrementByAmount(amount));
    };

    return (
        <>
            <div className="flex gap-10">
                <div>
                    <a href="https://vitejs.dev" target="_blank">
                        <img src={viteLogo} className="logo h-48 animate-pulse" alt="Vite logo"/>
                    </a>
                    <h1 className="text-xxl">Vite</h1>
                </div>
                <div>
                    <a href="https://react.dev" target="_blank">
                        <img src={reactLogo} className="logo h-48 animate-spin" alt="Vite logo" />
                    </a>
                    <h1 className="text-xxl">React</h1>
                </div>
                <div>
                    <a href="https://redux.js.org/" target="_blank">
                        <img src={reduxLogo} className="logo h-48 animate-pulse" alt="Vite logo" />
                    </a>
                    <h1 className="text-xxl">Redux</h1>
                </div>
                <div>
                    <a href="https://tailwindcss.com/" target="_blank">
                        <img src={tailwindLogo} className="logo h-48 animate-pulse" alt="Vite logo" />
                    </a>
                    <h1 className="text-xxl">Tailwind</h1>
                </div>
                <div>
                    <a href="https://mui.com/" target="_blank">
                        <img src={muiLogo} className="logo h-48 animate-pulse" alt="Vite logo" />
                    </a>
                    <h1 className="text-xxl">MUI</h1>
                </div>
            </div>
            <div className="card flex justify-center gap-5">
                <div>
                    <Button variant="outlined" onClick={handleIncrement}  className="text-xl font-bold"> +</Button>
                </div>
                <div className="mt-1 text-xxl">{count}</div>
                <Button variant="outlined" onClick={handleDecrement} className="text-xl font-bold">-</Button>
            </div>
            <div>
                <Button variant="contained" onClick={() => handleIncrementByAmount(5)}>Increment by 5</Button>
            </div>
            <p className="mt-8">
                    Edit <code>src/pages/Demo.tsx</code> and save to test HMR
            </p>
            <p className="read-the-docs mt-2">
                Click on the Vite and React logos to learn more
            </p>
        </>
    );
}

export default Demo;
