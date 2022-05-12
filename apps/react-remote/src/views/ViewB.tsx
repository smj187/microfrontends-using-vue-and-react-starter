import useStore from "../store"

export default function ViewB() {
  const { add, counter, reset } = useStore()

  return (
    <div className="bg-gray-500 text-white p-3 m-3">
      React View B | {counter} <button onClick={() => add()}>add</button>
      <button onClick={() => reset()}>reset</button>
    </div>
  )
}
