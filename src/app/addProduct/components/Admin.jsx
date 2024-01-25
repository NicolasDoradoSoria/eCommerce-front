"use client"

import ProductManagementState from '../context/ProductManagementState';
import AddEditProduct from '../views/AddEditProduct'
const Admin = ({ children }) => {
    return (
        <ProductManagementState>
            {children}
        </ProductManagementState>

    );
}

Admin.AddEditProduct = AddEditProduct

export default Admin;