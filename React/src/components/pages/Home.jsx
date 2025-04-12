import { useState } from "react"
// import Gato from "./gato.png" <- si se encuentra en la carpeta assets

const Home = () => {

  const [contador, setContador] = useState(0)

  return (
    <>
      <h1 className="text-4xl text-center">Home</h1>
      <img src="./gato.png" alt="Gato" />
      <button className="text-4xl bg-blue-600 rounded-2xl p-4" onClick={() => setContador(contador + 1)}>
        <p>{contador}</p>
      </button>
    </>
  )
}

export default Home