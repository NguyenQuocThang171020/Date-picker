import moment from 'moment'
import './footer.css'
const Footer = (props) => {
    const {date}= props
    return ( 
        <div className="footer-page">
            <h3>Bây giờ là : <span>{moment(date).format('LLLL')}</span></h3>
        </div>
     );
}
 
export default Footer;