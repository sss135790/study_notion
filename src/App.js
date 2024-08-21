import { Route, Routes } from "react-router-dom";
import "./App.css";  
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./Components/common/Navbar";
import OpenRoute from './Components/core/auth/OpenRoute' 
import ForgotPassword from "./pages/ForgotPassword";
import UpdatePassword from "./pages/UpdatePassword";
import VerifyEmail from "./pages/VerifyEmail";
import About from "./pages/About";
import ContactPage from "./pages/ContactPage"; 
import Dashboard from "./pages/Dashboard";
import MyProfile from "./Components/core/Dashboard/MyProfile";
import PrivateRoute from "./Components/core/auth/PrivateRoute";
import Settings from "./Components/core/Dashboard/Settings";
import EnrolledCourses from "./Components/core/Dashboard/EnrolledCourses";
import { useSelector } from "react-redux";
import { ACCOUNT_TYPE } from "./utils/constants";
import Cart from './Components/core/Dashboard/Cart'
import AddCourse from "./Components/core/Dashboard/AddCourse";
import MyCourses from "./Components/core/Dashboard/MyCourses"; 
import EditCourse from "./Components/core/Dashboard/EditCourse/EditCourse";
import Catalog from "./pages/Catalog";
import CourseDetails from "./pages/CourseDetails";
import Error from "./pages/Error";
import ViewCourse from "./pages/ViewCourse";
import VideoDetails from "./Components/core/Dashboard/ViewCourse/VideoDetails"; 
import Instructor from "./Components/core/Dashboard/Instructor";

function App() {
 const {user}=useSelector((state)=>state.profile) 
  return ( 
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
      <Navbar/> 
      <Routes>
        <Route path="/" element={<Home/>} />   
        <Route path="catalog/:catalogName" element={<Catalog/>} />
        <Route path="courses/:courseId" element={<CourseDetails/>}/> 
        <Route path="forgot-password" element={<OpenRoute><ForgotPassword/></OpenRoute>}/> 
        <Route path="signup" element={
          <OpenRoute>
            <Signup/>
          </OpenRoute>
        } />
        <Route path="login" element={
          <OpenRoute>
              <Login/>
          </OpenRoute>
        } />
        <Route
          path="update-password/:id"
          element={
              <OpenRoute>
                <UpdatePassword /> 
              </OpenRoute>
          }
        />  
        <Route
          path="verify-email"
          element={
              <OpenRoute>
                <VerifyEmail />  
              </OpenRoute>
          }
        />  
        <Route
                path="about"
                element={
                  
                    <About />
                  
                }
          />  
          <Route
                path="contact"
                element={ 
                  <ContactPage />  
                }
          />  
          <Route 
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          >
            <Route path="dashboard/my-profile" element={<MyProfile />} /> 
            <Route path="dashboard/settings" element={<Settings />} />  

            {
              user?.accountType===ACCOUNT_TYPE.STUDENT && (
                <>
                  <Route path="dashboard/enrolled-courses" element={<EnrolledCourses />} />
                  <Route path="dashboard/cart" element={<Cart/>} />  
                </>
              )
            } 
            {
              user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
                <> 
                <Route path="dashboard/add-course" element={<AddCourse />} /> 
                <Route path="dashboard/my-courses" element={<MyCourses />} />
                <Route path="dashboard/edit-course/:courseId" element={<EditCourse />} />
                <Route path="dashboard/instructor" element={<Instructor />} />
                </>
              )
            } 
          </Route>

          <Route 
          element={
            <PrivateRoute>
              <ViewCourse/> 
            </PrivateRoute>
          }
          >
              {
              user?.accountType === ACCOUNT_TYPE.STUDENT && (
                <>
                  <Route
                    path="view-course/:courseId/section/:sectionId/sub-section/:subSectionId"
                    element={<VideoDetails/>} 
                  />
                </>
              )
            }
          </Route>

          <Route path="*" element={<Error/>} /> 
      </Routes> 
    </div>
  ); 
}

export default App;
