import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Home from "../Pages/Home/Home";
import Gallery from "../Pages/About/Gallery";
import Products from "../Pages/Products/Products";
import DetailsProduct from "../Pages/Products/DetailsProduct";
import Contect from "../Pages/ContectUs/Contect";
import HotProducts from './../Pages/Products/HotProducts';
import Event from "../Pages/About/Event";
import DashboardLayout from "../Layouts/DashboardLayout";
import AdminHome from "../Pages/AdminPages/AdminHome/AdminHome";
import ProductList from "../Pages/AdminPages/ProductList/ProductList";
import CategoryList from "../Pages/AdminPages/Category/CategoryList";
import BookingsList from "../Pages/AdminPages/Bookings/BookingsList";
import AdminLogin from "../Pages/AdminPages/AdminAuth/AdminLogin";
import AdminRegistration from "../Pages/AdminPages/AdminAuth/AdminRegistration";
import CheckLogin from "../Security/CheckLogin";
import OrderPage from "../Pages/OrderPage/OrderPage";
import ErrorPage from "../Utils/ErrorPage";
import Invoice from "../Pages/AdminPages/Invoice/Invoice";
import CheckNotLogin from "../Security/CheckNotLogin";
import Profile from "../Pages/AdminPages/Profile/Profile";
import Contact from "../Pages/AdminPages/Contact/Contact";
import ExpenseCategoryList from "../Pages/AdminPages/ExpenseCategory/ExpenseCategoryList";
import ExpenseList from "../Pages/AdminPages/ExpenseList/ExpenseList";
import ExpenseCreate from "../Pages/AdminPages/ExpenseList/ExpenseCreate";
import ExpenseView from "../Pages/AdminPages/ExpenseList/ExpenseView";
import UserList from "../Pages/AdminPages/UserList/UserList";
import Role from "../Pages/AdminPages/RoleList/Role";
import RoleList2 from "../Pages/AdminPages/RoleList/RoleList2";
import UpdateRole from "../Pages/AdminPages/RoleList/UpdateRole";
import AccessComponents from "./AccessComponents";
import CompanyProfile from "../Pages/AdminPages/CompanyProfile/CompanyProfile";
import StockCategoryList from "../Pages/AdminPages/Stock/StockCategory/StockCategoryList";
import CreateStock from "../Pages/AdminPages/Stock/StockList/CreateStock";
import SalesList from "@/Pages/AdminPages/Sales/SalesList/SalesList";
import NewSales from "@/Pages/AdminPages/Sales/NewSales/NewSales";
import SaleInvoice from "@/Pages/AdminPages/Invoice/SaleInvoice";
import SalesReport from "@/Pages/AdminPages/Report/SalesReport";
import StockReport from "@/Pages/AdminPages/Report/StockReport";
import ExpenseReport from "@/Pages/AdminPages/Report/ExpenseReport";
import RevenueReport from "@/Pages/AdminPages/Report/RevenueReport";
import BrandList from "@/Pages/AdminPages/Brand/BrandList";


const Router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children : [
            {
                path: '/',
                element : <Home />
            },
            {
                path: '/gallery',
                element : <Gallery />
            },
            {
                path: '/events',
                element : <Event/>
            },
            {
                path: '/contact',
                element : <Contect />
            },
            {
                path: '/products',
                element : <Products/>
            },
            {
                path: '/products/:id',
                element : <DetailsProduct/>,
            },
            {
                path: '/hotProduct',
                element : <HotProducts/>,
            },
            {
                path: '/orderPage',
                element : <OrderPage/>,
            },
            {
                path: '/invoice',
                element : <Invoice/>,
            },
        ]
    },
    {
        path: '/admin',
        element: <CheckLogin><DashboardLayout /></CheckLogin>,
        children: [
            {
                path: '/admin',
                element: <AdminHome />
            },
            {
                path: '/admin/productList',
                element: <ProductList />
            },
            {
                path: '/admin/categoryList',
                element: <CategoryList />
            },
            {
                path: '/admin/bookingsList',
                element: <BookingsList />
            },
            {
                path: '/admin/bookingsList',
                element: <BookingsList />
            },
            {
                path: '/admin/profile',
                element: <Profile />
            },
            {
                path: '/admin/contact',
                element: <Contact />
            },
            // Expense
            {
                path: '/admin/expenseCategory',
                element: <ExpenseCategoryList />
            },
            {
                path: '/admin/expenseList',
                element: <ExpenseList />
            },
            {
                path: '/admin/expenseCreate',
                element: <ExpenseCreate />
            },
            {
                path: '/admin/expenseView',
                element: <ExpenseView />
            },
            {
                path: '/admin/purchaseCategory',
                element: <StockCategoryList />
            },

            // Stock
            {
                path: '/admin/purchaseList',
                element: <CreateStock />
            },
            // Brand
            {
                path: '/admin/brand',
                element: <BrandList />
            },
            // Sales
            {
                path: '/admin/salesList',
                element: <SalesList />
            },
            {
                path: '/admin/newSale',
                element: <NewSales />
            },
            {
                path: '/admin/invoice',
                element: <SaleInvoice />
            },
            // Report section
            {
                path: '/admin/salesReport',
                element: <SalesReport />
            },
            {
                path: '/admin/stockReport',
                element: <StockReport />
            },
            {
                path: '/admin/expenseReport',
                element: <ExpenseReport />
            },
            {
                path: '/admin/revenueReport',
                element: <RevenueReport />
            },
            // Administrative
            {
                path: '/admin/userList',
                element: <AccessComponents accessName='user-list'><UserList /></AccessComponents>
            },
            {
                path: '/admin/roleList',
                element: <AccessComponents accessName='role-list'><Role /></AccessComponents>
            },
            {
                path: '/admin/createRole',
                element: <AccessComponents accessName='role-create'><RoleList2 /></AccessComponents>
            },
            {
                path: '/admin/editRole',
                element: <AccessComponents accessName='role-edit'><UpdateRole /></AccessComponents>
            },
            {
                path: '/admin/company',
                element: <AccessComponents accessName='settings-list'><CompanyProfile /></AccessComponents>
            },
        ]
    },
    {
        path: '/admin/login',
        element: <CheckNotLogin><AdminLogin /></CheckNotLogin>
    },
    {
        path: '/admin/register',
        element: <AdminRegistration />
    },
])


export default Router;