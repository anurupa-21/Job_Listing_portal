// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { GiHamburgerMenu } from "react-icons/gi";
// const Navbar = () => {
//   const [show, setShow] = useState(false);
//   const { isAuthenticated } = useSelector((state) => state.user);
//   return (
//     <>
//       <nav className={show ? "navbar show_navbar" : "navbar"}>
//         <div className="logo">
//           <img src="/logo.png" alt="logo" />
//         </div>
//         <div className="links">
//           <ul>
//             <li>
//               <Link to={"/"} onClick={() => setShow(!show)}>
//                 HOME
//               </Link>
//             </li>
//             <li>
//               <Link to={"/jobs"} onClick={() => setShow(!show)}>
//                 JOBS
//               </Link>
//             </li>
//             {isAuthenticated ? (
//               <li>
//                 <Link to={"/dashboard"} onClick={() => setShow(!show)}>
//                   DASHBOARD
//                 </Link>
//               </li>
//             ) : (
//               <li>
//                 <Link to={"/login"} onClick={() => setShow(!show)}>
//                   LOGIN
//                 </Link>
//               </li>
//             )}
//           </ul>
//         </div>
//         <GiHamburgerMenu className="hamburger" onClick={() => setShow(!show)} />
//       </nav>
//     </>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHome, FaBriefcase, FaSignInAlt, FaUserCircle } from "react-icons/fa"; // Importing icons

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated } = useSelector((state) => state.user);

  return (
    <nav className={show ? "navbar show_navbar" : "navbar"}>
      <div className="logo">
        <img src="/logo.png" alt="Company Logo" />
      </div>

      <div className="links">
        <ul>
          <li>
            <Link to={"/"} onClick={() => setShow(false)}>
              <FaHome className="icon" /> HOME
            </Link>
          </li>
          <li>
            <Link to={"/jobs"} onClick={() => setShow(false)}>
              <FaBriefcase className="icon" /> JOBS
            </Link>
          </li>
          {isAuthenticated ? (
            <li>
              <Link to={"/dashboard"} onClick={() => setShow(false)}>
                <FaUserCircle className="icon" /> DASHBOARD
              </Link>
            </li>
          ) : (
            <li>
              <Link to={"/login"} onClick={() => setShow(false)}>
                <FaSignInAlt className="icon" /> LOGIN
              </Link>
            </li>
          )}
        </ul>
      </div>
      <GiHamburgerMenu className="hamburger" onClick={() => setShow(!show)} />
    </nav>
  );
};

export default Navbar;
