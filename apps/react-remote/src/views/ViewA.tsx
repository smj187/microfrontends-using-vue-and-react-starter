import useStore from "@/store"

export default function ViewA() {
  const { add, counter, reset } = useStore()

  return (
    <div className="bg-pink-500 text-white p-3 m-3">
      React View A | {counter} <button onClick={() => add()}>add</button>
      <button onClick={() => reset()}>reset</button>
    </div>
  )
}
