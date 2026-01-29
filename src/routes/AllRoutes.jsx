import { Routes, Route } from "react-router-dom";
import { HomePage, ProductDetail, ProductList, PageNotFound, Login, Register , CartPage, OrderPage, DashboardPage} from "../pages";
import {ProtectedRoute} from "./ProtectedRoute";



export const AllRoutes = () => {
  return (
    <Routes>
     <Route path="/" element={<HomePage title="Home" />} />
      <Route path="product/:id" element={<ProductDetail title="Product Detail" />} />
     <Route path="/product" element={<ProductList title="Product List" />} />
     <Route path="/login" element={<Login title="Login" />} />
     <Route path="/register" element={<Register title="Register" />} />

     <Route path="/cart" element={<ProtectedRoute><CartPage title="Cart" /></ProtectedRoute>} />
     <Route path="/order-summary" element={<ProtectedRoute><OrderPage title="My Order" /></ProtectedRoute>} />
     <Route path="/dahsboard" element={<ProtectedRoute><DashboardPage title="My Dashboard" /></ProtectedRoute>} />
     <Route path="*" element={<PageNotFound title="Page Not Found" />} />
    </Routes>
  )
}
