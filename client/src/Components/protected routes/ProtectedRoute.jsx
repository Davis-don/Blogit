// // src/components/ProtectedRoute.js
// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import useUserStore from '../../Store/Userstore';
// const token = sessionStorage.getItem("token");

// const ProtectedRoute = ({ element: Component }) => {
//   const user = useUserStore((state) => state.user);

//   // Check if user array is empty (unauthenticated)
//   return user.length === 0 ? <Navigate to="/signin" /> : <Component />;
// };

// export default ProtectedRoute;

// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import useUserStore from '../../store/userStore';

const ProtectedRoute = ({ element: Component }) => {
  const token = sessionStorage.getItem("token"); // Retrieve token from sessionStorage

  // Check if the token exists for authorization
  return token ? <Component /> : <Navigate to="/signin" />;
};

export default ProtectedRoute;

