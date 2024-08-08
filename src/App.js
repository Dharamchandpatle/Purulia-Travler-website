import React from "react";
import { Route, Routes } from "react-router-dom";
import './assets/css/tailwind.css'
import './assets/css/materialdesignicons.min.css'

import Index from './pages/index/index'
import IndexTwo from './pages/index/index-two'
import IndexThree from './pages/index/index-three'
import IndexFour from './pages/index/index-four'
import IndexFive from './pages/index/index-five'
import Grid from './pages/listing/tour-grid/grid' 
import GridLeftSidebar from './pages/listing/tour-grid/grid-left-sidebar'
import GridRightSidebar from './pages/listing/tour-grid/grid-right-sidebar'
import List from './pages/listing/tour-list/list'
import ListLeftSidebar from './pages/listing/tour-list/list-left-sidebar'
import ListRightSidebar from './pages/listing/tour-list/list-right-sidebar'
import TourDetailOne from './pages/listing/tour-detail/tour-detail-one'
import TourDetailTwo from './pages/listing/tour-detail/tour-detail-two'
import Aboutus from './pages/aboutus'
import UserProfile from './pages/account/user-profile'
import UserPayment from './pages/account/user-payment'
import UserInvoice from './pages/account/user-invoice'
import UserSocial from './pages/account/user-social'
import UserNotification from './pages/account/user-notification'
import UserSetting from './pages/account/user-setting'
import Helpcenter from './pages/helpcenter/helpcenter'
import HelpcenterFaq from './pages/helpcenter/helpcenter-faqs'
import HelpcenterGuides from './pages/helpcenter/helpcenter-guides'
import HelpcenterSupport from './pages/helpcenter/helpcenter-support'
import Login from './pages/auth/login'
import Signup from './pages/auth/signup'
import SignupSuccess from './pages/auth/signup-success'
import ForgotPassword from './pages/auth/forgot-password'
import LockScreen from './pages/auth/lock-screen'
import Terms from './pages/utility/terms'
import Privacy from './pages/utility/privacy'
import Comingsoon from './pages/special/comingsoon'
import Maintenance from './pages/special/maintenance'
import Error from './pages/special/404'
import Blogs from './pages/blog/blogs'
import BlogStandard from './pages/blog/blog-standard'
import BlogDetail from './pages/blog/blog-detail'
import Contact from './pages/contact'

function App() {
  return (
   <Routes>
    <Route path="/" element={<Index/>}/>
    <Route path="/index-two" element={<IndexTwo/>}/>
    <Route path="/index-three" element={<IndexThree/>}/>
    <Route path="/index-four" element={<IndexFour/>}/>
    <Route path="/index-five" element={<IndexFive/>}/>
    <Route path="/grid" element={<Grid/>}/>
    <Route path="/grid-left-sidebar" element={<GridLeftSidebar/>}/>
    <Route path="/grid-right-sidebar" element={<GridRightSidebar/>}/>
    <Route path="/list" element={<List/>}/>
    <Route path="/list-left-sidebar" element={<ListLeftSidebar/>}/>
    <Route path="/list-right-sidebar" element={<ListRightSidebar/>}/>
    <Route path="/tour-detail-one" element={<TourDetailOne/>}/>
    <Route path="/tour-detail-one/:id" element={<TourDetailOne/>}/>
    <Route path="/tour-detail-two" element={<TourDetailTwo/>}/>
    <Route path="/aboutus" element={<Aboutus/>}/>
    <Route path="/user-profile" element={<UserProfile/>}/>
    <Route path="/user-payment" element={<UserPayment/>}/>
    <Route path="/user-invoice" element={<UserInvoice/>}/>
    <Route path="/user-social" element={<UserSocial/>}/>
    <Route path="/user-notification" element={<UserNotification/>}/>
    <Route path="/user-setting" element={<UserSetting/>}/>
    <Route path="/helpcenter" element={<Helpcenter/>}/>
    <Route path="/helpcenter-faqs" element={<HelpcenterFaq/>}/>
    <Route path="/helpcenter-guides" element={<HelpcenterGuides/>}/>
    <Route path="/helpcenter-support" element={<HelpcenterSupport/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/signup-success" element={<SignupSuccess/>}/>
    <Route path="/forgot-password" element={<ForgotPassword/>}/>
    <Route path="/lock-screen" element={<LockScreen/>}/>
    <Route path="/terms" element={<Terms/>}/>
    <Route path="/privacy" element={<Privacy/>}/>
    <Route path="/comingsoon" element={<Comingsoon/>}/>
    <Route path="/maintenance" element={<Maintenance/>}/>
    <Route path="/404" element={<Error/>}/>
    <Route path="/blogs" element={<Blogs/>}/>
    <Route path="/blog-standard" element={<BlogStandard/>}/>
    <Route path="/blog-detail" element={<BlogDetail/>}/>
    <Route path="/blog-detail/:id" element={<BlogDetail/>}/>
    <Route path="/contact" element={<Contact/>}/>
   </Routes>
  );
}

export default App;
