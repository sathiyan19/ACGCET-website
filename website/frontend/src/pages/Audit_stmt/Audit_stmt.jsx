import React from 'react'
import "./Audit_stmt.css";
import { Timeline } from "../../components";
import { Backtotop,Underline } from "../../widgets";
import { audit_stmt } from "../../constants/audit_stmt";

const Audit_stmt = () => {
  return (
    <div>
        <Backtotop />
        <div className='audit_container'>
           <Underline heading="Audit Statement"/>
           <div className='audit_stmt_sec'>
            <div className='audit_stmt_recs'>
            {audit_stmt.map((item) => (
              <Timeline
                key={item.id}
                head={item.head}
                house={item.house}
                pdf={item.pdf}
              />
            ))}
            </div>
           </div>
        </div>
        
    </div>
  )
}

export default Audit_stmt