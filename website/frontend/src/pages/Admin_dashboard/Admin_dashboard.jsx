import React,{useEffect, useState} from 'react'
import './Admin_dashboard.css'
import { Underline } from '../../widgets'
import Floatingmenu from '../../widgets/Floatingmenu/Floatingmenu'
import { admin_menu } from '../../constants/dashboard'
const Admin_dashboard = () => {
    const [file, setFile] = useState(null);
  const [resp,setResponse]=useState("");
  const [tables,setTables]=useState([]);
  const [inputValue, setInputValue] = useState('');
  const [flag,setFlag]=useState(false);
  


  const filteredOptions = tables.filter(option =>
    option.toLowerCase().includes(inputValue.toLowerCase())
  );

useEffect(()=>{
    // gettables()
  },[])

useEffect(()=>{
    console.log(filteredOptions)
},[inputValue])

  return (
    <div>
        <Underline heading={"Admin Panel"}/>
        <Floatingmenu  
            head="Menu"
            links={admin_menu}
          />
          <div className="admin-page">
          <div className="admin-drop">
      <input
      className="admin-select"
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        onFocus={e=>setFlag(true)}
        onBlur={e=>setFlag(false)}
        placeholder="Type to filter..."
      />
      {flag && <div className="dropdown-content">
      {filteredOptions.map((item)=><div className="dropdowns" onMouseDown={(e) => {setInputValue(item); setFlag(false)}} value={item}>{item}</div>)}
      </div>}
      </div>

          <form className='admin-upload'
      >
        <input className='admin-input' type="file" name="file" accept=".xlsx"/>
        <button className='admin-submit' type="submit">Upload</button>
      </form>
    </div>
    </div>
  )
}

export default Admin_dashboard