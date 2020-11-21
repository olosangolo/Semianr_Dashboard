
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import AssessmentIcon from '@material-ui/icons/Assessment';
import DnsIcon from '@material-ui/icons/Dns';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
// core components/views for RTL layout
const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Biểu đồ",
    rtlName: "لوحة القيادة",
    icon: AssessmentIcon,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Thống kê",
    rtlName: "قائمة الجدول",
    icon: DnsIcon,
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "Thông tin tài khoản",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },

  {
    path: "/notifications",
    name: "Thông báo",
    rtlName: "إخطارات",
    icon: NotificationsActiveIcon,
    component: NotificationsPage,
    layout: "/admin"
  },
];

export default dashboardRoutes;
