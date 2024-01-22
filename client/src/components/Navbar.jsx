import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className="bg-zinc-700 flex justify-between px-20 py-5 " >
      
      <Link className="bg-slate-200 rounded-md px-2 py-1 font-bold" to="/">
      <h1>React MySQL</h1>

      </Link>

      <ul className="flex gap-x-2">
        <li>

       <Link className="bg-slate-200 font-bold rounded-md px-2 py-1" to="/">Home</Link>


        </li>
       <li>    
       <Link className="bg-slate-200 font-bold rounded-md px-2 py-1" to="/new">Creat task</Link>

       </li>
      </ul>
    </div>
  )
}

export default Navbar
