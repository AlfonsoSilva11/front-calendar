import Agenda from "@/components/Agenda"
import { Link } from "react-router-dom"


const Home = () => {
  return (
    <div>
        <Link className="bg-slate-900 px-3 py-1 rounded-md border"  to="/about">
        Ir a about
        </Link>
        <Agenda/>
        </div>
  )
}

export default Home