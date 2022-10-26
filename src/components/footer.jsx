import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div id='footer'>
      <div className='container text-center'>
        <p>
          &copy; 2022 QUEEN HEALTHCARE AGENCY    |   <Link to="cookies">Cookie Policy</Link>
        </p>
      </div>
    </div>
  )
}