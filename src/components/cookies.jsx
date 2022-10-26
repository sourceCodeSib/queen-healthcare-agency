import { Link } from 'react-router-dom';

export const Cookies = () => {
    return (
      <div id="cookies">
        <div className="sub-nav">
          <Link to='/'>
            <img className='logo' src='img/logo.svg' alt="QUEEN HEALTHCARE AGENCY"/>
          </Link>
        </div>
        <div className="container">
          <h3>1.0 What are cookies?</h3>
          <p>Cookies are small text files that are placed on your computer by websites that you visit. Most websites use cookies
            and they can have several different purposes. The primary uses for cookies are to; Help maintain security on the website and to allow it to function correctly,
            Remember user information which has been entered and personalise content, Collect information about how the website is being used.
          </p>
          <h3>2.0 Do we use cookies and how do we use them?</h3>
          <p>This website uses cookies to allow better understanding of website usage and tailoring of content.</p>
          <h3>3.0 Cookie classifications</h3>
          <p>We use two classifications of cookies:</p>
          <p>Cookies that are defined as “strictly necessary” are required in order to allow routine, safe operation of the website.</p>
          <p>Cookies that are defined as “not strictly necessary” are cookies which are not required for base functionality of our website,
            but which may be used for analytical purposes and to provide enhanced used experience.</p>
          <p></p>
          <h3>4.0 How to disable cookies</h3>
          <p>Cookies which are not strictly necessary will only be enabled on the website if we receive your consent to do so.</p>
          <p>Alternatively, most web browsers allow some control of most cookies through the browser settings. To find out more about
            cookies, including how to see what cookies have been set, visit <a href="www.aboutcookies.org" target="blanks">www.aboutcookies.org</a>.
          </p>
          <h3>5.0 Changes to our cookie policy</h3>
          <p>From time to time, we may need to change this cookie policy. For instance, we may need to do so to reflect any changes in technology or 
            legislation or our data use practices.  We encourage you to periodically review our Cookie Policy to determine the current policy in force as the updated 
            version applies to each use of this Site.</p>
          <h3>6.0 Contacting us</h3>
          <p>If you have any questions, comments and requests regarding this cookie policy, please contact us.</p>
        </div>
      </div>
    )
  }