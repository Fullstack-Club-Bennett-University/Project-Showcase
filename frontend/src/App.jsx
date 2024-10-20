// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import SignupPage from "./Pages/SignupPage";
// import SigninPage from "./Pages/SigninPage";
// // import DashboardMain from "./Pages/DashboardMain";
// import ParentDashboard from "./Pages/ParentDashboard";
// import Tickets from "./components/Tickets";
// import Sidebar from "./components/SideBar";
// import Dashboard from "./components/Dashboard";
// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Sidebar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/signup" element={<SignupPage />} />
//           <Route path="/signin" element={<SigninPage />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/dashboard-parent" element={<ParentDashboard />} />
//           <Route path="/tickets" element={<Tickets />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import SignupPage from "./Pages/SignupPage";
// import SigninPage from "./Pages/SigninPage";
// import ParentDashboard from "./Pages/ParentDashboard";
// import Tickets from "./components/Tickets";
// import Sidebar from "./components/Sidebar";
// import Dashboard from "./components/Dashboard";
// import ComingSoon from "./components/ComingSoon";

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="flex">
//         {/* Sidebar is fixed to the left */}
//         <Sidebar />

//         {/* Main content area where routes will be rendered */}
//         <div className="flex-1 p-5">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/signup" element={<SignupPage />} />
//             <Route path="/signin" element={<SigninPage />} />
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/dashboard-parent" element={<ParentDashboard />} />
//             <Route path="/tickets" element={<Tickets />} />
//             <Route path="*" element={<ComingSoon />} />
//           </Routes>
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import SignupPage from "./Pages/SignupPage";
import SigninPage from "./Pages/SigninPage";
import ParentDashboard from "./Pages/ParentDashboard";
import Tickets from "./components/Tickets";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import ComingSoon from "./components/ComingSoon";
import Tasks from "./components/Tasks";
import TaskList from "./components/TaskList";
import Ticket from "./Pages/Ticket";

// Create a Layout component
const Layout = () => {
  const location = useLocation();

  // Define routes where you don't want the Sidebar or padding
  const noSidebarRoutes = ["/", "/signup", "/signin"];

  return (
    <div className="flex">
      {/* Conditionally render Sidebar */}
      {!noSidebarRoutes.includes(location.pathname) && <Sidebar />}

      {/* Main content area, conditionally applying padding */}
      <div
        className={`${
          noSidebarRoutes.includes(location.pathname) ? "" : "p-5 sm:pt-2 pt-16"
        } flex-1`}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard-parent" element={<ParentDashboard />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/tasks-assigned" element={<TaskList />} />
          <Route path="/ticket/:id" element={<Ticket/>}  />
          {/* <Route path="*" element={<ComingSoon />} /> */}
        </Routes>
      </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
