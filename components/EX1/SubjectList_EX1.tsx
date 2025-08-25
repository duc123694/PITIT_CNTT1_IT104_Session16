import React from 'react'
import "./EX1.css"
const SubjectList_EX1:React.FC = () => {
    const subject:string[] =["Toán","Văn","Anh","Hóa","Sinh"];
  return (
    <div className="container">
        <h2 className="title">Danh sách môn học</h2>
        <ul className="list">
            {subject.map((subject,index)=>(
                <li key={index} className="item" >
                    {subject}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default SubjectList_EX1