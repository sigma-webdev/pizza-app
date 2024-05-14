import React, { useState, useEffect } from 'react';
import { Layout } from '../../Layout/Layout';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getOrderDetails } from '../../Redux/OrderSlice';

const UpdateOrder = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  const [formOrder, setFormOrder] = useState({
    address: '',
    paymentMethod: '',
    totalPrice: '',
  });

  const [orderData, setOrderData] = useState();

  useEffect(() => {
    (async () => {
      const res = await dispatch(getOrderDetails(id)); // Dispatch action to fetch product details
      if (res.payload) {
        setOrderData(res?.payload);
      }
    })();
  }, [id, dispatch]);

  useEffect(() => {
    // Populate form fields when orderData is updated
    if (orderData) {
      setOrderData({
        address: formOrder?.address || '',
        paymentMethod: formOrder?.paymentMethod || '',
        totalPrice: formOrder?.totalPrice || '',
      });
    }
  }, []);

  //   change the value and the data
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormProduct((prevData) => ({ ...prevData, [name]: value }));
  };

  //   const productDataSubmission = async (e) => {
  //     e.preventDefault();

  //     // call the dispatch function to upload the product data
  //     const res = await dispatch(updateProduct({ id, productFormData }));
  //     // navigate to admin dashboard
  //     if (res?.payload) {
  //       navigate('/admin');
  //     }
  //   };

  console.log(orderData);
  return (
    <Layout>
      <section className="py-12 ">
        <form className="max-w-md mx-auto mt-8 bg-white p-7 ">
          <h2 className="mb-4 text-2xl font-semibold">
            Update Product order details
          </h2>
          {/* <form onSubmit={productDataSubmission}> */}
          <div className="mb-4">
            <p className="block text-sm font-medium text-gray-700">
              Product Order Id -
            </p>
          </div>
          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Delivery Address -{' '}
              <span className="text-red-400"> (change with caution )</span>
            </label>
            <textarea
              id="address"
              name="address"
              value={orderData?.address}
              minLength={5}
              maxLength={60}
              onChange={handleInputChange}
              className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="mb-2 ">Select Category:</label>
            <select
              className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleInputChange}
              name="category"
              value={orderData?.paymentMethod}
            >
              <option value="" className="bg-yellow-500">
                Select option
              </option>
              <option value="ONLINE">ONLINE PAYMENT</option>
              <option value="OFFLINE">OFFLINE PAYMENT</option>
            </select>
          </div>
          <div className="mb-4">
            <p className="block font-medium text-gray-700">
              Total price - ₹{orderData?.totalPrice}/-
            </p>
          </div>

          <button
            type="submit"
            className="w-full py-2 text-white bg-yellow-500 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Update product
          </button>
        </form>
      </section>
    </Layout>
  );
};

export default UpdateOrder;
