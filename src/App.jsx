import { FaHandsClapping } from "react-icons/fa6";
import Content from "./components/Content";


function App() {
 

  return (
    <>
      <div className="max-h-screen  max-w-screen">
        <div>
          <h1>Hello {} <FaHandsClapping /></h1>
          <p>Welcome to your dashboard</p>
          <Content/>
        </div>
      </div>
    </>
  )
}

export default App
