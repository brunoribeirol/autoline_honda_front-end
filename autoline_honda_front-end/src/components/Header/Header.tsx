import React from "react";
import { Link } from "react-router-dom";

const HeaderComponent: React.FC = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">Autoline Honda</Link>
      <div className="ml-auto">
      </div>
    </header>
  );
};

export default HeaderComponent;


// import React from "react";
// import { NavLink } from "react-router-dom";

// const HeaderComponent: React.FC = () => {
//   return (
//     <header className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container-fluid">
//         <NavLink className="navbar-brand" to="/">
//           Car Dealership
//         </NavLink>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/">
//                 Home
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/branches">
//                 Concessionárias
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/branches/add">
//                 Adicionar Concessionária
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default HeaderComponent;
