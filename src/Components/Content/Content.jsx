import { useState } from "react";
import Footer from "../Footer/Footer";
import './Content.css'
const Content = () => {
    const [date,setDate] = useState(Date.now());
    const handeDate = (e)=>{
        setDate(e.target.value)
    }
    return ( 
        <div className="container-page">
            <p className="text">VUI LÒNG CHỌN NGÀY : </p><input type="date" className="date-page"  onChange={handeDate}/>
            <Footer date= {date}/>
        </div>
     );
}
 
export default Content;