import '../App.css'
import logo from '../images/FC-Logo.svg'

export default function Navbar(){
    return(
        <div className="nav">

            <a href='/'>
                <img className='logo' src={logo} alt='FC Logo'></img>
            </a>

            <div className="pages">
                <a href='/about-us'>about us</a>
                <a href='/events'>events</a>
                <a href='/sponsorship'>sponsorship</a>
                <a href='/teams'>teams</a>

                <div className="dropdown">
                    <a href='/shows'>shows</a>

                    <div className="dropdown-content">
                        <a href="/">'24-'25</a>
                        <a href="/">'23-'24</a>
                        <a href="/">'22-'23</a>
                        <a href="/">'21-'22</a>
                        <a href="/">'20-'21</a>
                        <a href="/">'19-'20</a>
                        <a href="/">'18-'19</a>
                        <a href="/">'17-'18</a>
                        <a href="/">'16-'17</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
