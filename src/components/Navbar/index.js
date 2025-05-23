import { useNavigate } from 'react-router-dom';
import './index.css';
import {useState} from 'react';
// import { MdMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
 
 const Navbar=(props)=>{
    const {setShowSignUpModal}=props;
    const navigate=useNavigate();

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    const [currentTab,setCurrentTab]=useState("");
    
    return(
        <>
        <header className="navbar">
            <div className="navbar-logo" onClick={()=>{navigate("/")}}>
                <img className='taskify-logo' alt="ProjectTracker-logo" src="/projecttracker-logo.png" />
                {/* <h3 className='projecttracker-logo'>Project Tracker</h3> */}
            </div>
            <div className='navbar-right'>

                <ul className='tabs'>
                    <li><div 
                    className={currentTab==='1'? 'tab-active' : ''} onClick={()=>{setCurrentTab('1');navigate('/')}}>All Projects</div></li>
                    <li><div href="/completed"
                    className={currentTab==='2'? 'tab-active' : ''} onClick={()=>{setCurrentTab('2');navigate('/completed-projects')}}>Completed Projects</div></li>
                    <li><div href="/pending"
                    className={currentTab==='3'? 'tab-active' : ''} onClick={()=>{setCurrentTab('3');navigate('/pending-projects')}}>Pending Projects</div></li>
                    {/* <li><div href="/notes"
                    className={currentTab==='3'? 'tab-active' : ''} onClick={()=>{setCurrentTab('4');navigate('/notes')}}>Notes</div></li> */}
                    
                </ul>

            <div className="navbar-cta">
                <button className="cta-button" onClick={()=>{setShowSignUpModal(t=>!t)}}>Sign Up / Log In</button>
            </div>
            </div>

            <div className='navbar-cta-mob-right'>
                <div className="navbar-cta-mobile">
                    <button className="cta-button" onClick={()=>{setShowSignUpModal(t=>!t)}}>Sign Up / Log In</button>
                </div>

                <div className="menu-toggle hamburger" onClick={toggleMenu}>
                {isOpen ? <IoCloseSharp />:<IoCloseSharp />}
                </div>
            </div>
            
        </header>
        {isOpen && (
                    <div className="mobile-menu">
                        <ul className='tabs-mobile'>
                            <li><div 
                            className={currentTab==='1'? '' : ''} onClick={()=>{setCurrentTab('1');navigate('/');toggleMenu();}}>All Projects</div></li>
                            <li><div 
                            className={currentTab==='2'? '' : ''} onClick={()=>{setCurrentTab('2');navigate('/completed-projects');toggleMenu();}}>Completed Projects</div></li>
                            <li><div 
                            className={currentTab==='3'? '' : ''} onClick={()=>{setCurrentTab('3');navigate('/pending-projects');toggleMenu();}}>Pending Projects</div></li>
                            {/* <li><div href="/notes"
                            className={currentTab==='3'? 'tab-active' : ''} onClick={()=>{setCurrentTab('4');navigate('/notes')}}>Notes</div></li>
                     */}
                        </ul>
                    </div>
                )}
        </>
    )
}

export default Navbar;