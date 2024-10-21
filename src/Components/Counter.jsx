import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../slicer/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatcher = useDispatch();

  return (
    <>
      <div className="px-5 py-3">
      <p className="bg-zinc-400 p-3 mb-10 font-bold text-xl max-w-sm mx-auto">
        {count}
      </p>
      <div className="flex justify-center gap-x-3">
        <button
          className="bg-orange-500 rounded-md outline-none py-2 px-3"
          onClick={() => dispatcher(increment())}
        >
          IncreaseCnt
        </button>
        <button
          className="bg-orange-500 rounded-md outline-none py-2 px-3"
          onClick={() => dispatcher(decrement())}
        >
          DecreaseCnt
        </button>
      </div>
      </div>
    </>
  );
};

export default Counter;
