import Agenda from "@/components/Agenda"
import { Link } from "react-router-dom"


function Home(){
  return (
    <div className="bg-blue-800">
        <Link className="bg-slate-900 px-3 py-1 rounded-md border"  to="/about">
        Ir a about
        </Link>
      <Agenda/>
        </div>
  )
}

export default Home