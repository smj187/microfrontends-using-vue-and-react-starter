import useStore from "@/store"

export default function ViewC() {
  const { add, counter, reset } = useStore()

  return (
    <div className="bg-lime-500 text-white p-3 m-3">
      React View C | {counter} <button onClick={() => add()}>add</button>
      <button onClick={() => reset()}>reset</button>
    </div>
  )
}
