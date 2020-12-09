import './Footer.css';
const Footer = (props) => {
    return (
       <footer className="Footer">
           <p>Copyright &copy; Project 3 {new Date().getFullYear()} All Rights Reserved</p>
       </footer>
    )
}

export default Footer;