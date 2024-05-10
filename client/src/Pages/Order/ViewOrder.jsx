import React, { useEffect, useState } from 'react';

import { Layout } from '../../Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { cancelOrder, loggedInUserOrder } from '../../Redux/OrderSlice';
import toast from 'react-hot-toast';

const ViewOrder = () => {
  const dispatch = useDispatch();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchUserOrder = async () => {
      try {
        const response = await dispatch(loggedInUserOrder());

        if (response.payload) {
          setOrders(response.payload); // Update orders state with fetched data
        }
      } catch (error) {
        toast.error('Not able to get order data');
      }
    };

    fetchUserOrder(); // Call the fetchUserOrder function inside useEffect
  }, [dispatch]);

  const handleOrderCancel = async (id) => {
    // Show alert with "Yes" or "No" options
    const userConfirmed = window.confirm(
      'Are you sure you want to cancel your order?'
    );

    // Check user's response
    if (userConfirmed) {
      await dispatch(cancelOrder({ id: id, status: 'CANCELLED' }));
    }
  };

  return (
    <Layout>
      {orders.length > 0 ? (
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-10 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-4xl text-3xl font-medium title-font  text-gray-900">
                My Orders
              </h1>
            </div>
            {orders.map((orderItem, key) => (
              <div className=" border " key={key}>
                <div className="lg:w-2/3 w-full mx-auto overflow-auto">
                  <p className="mt-10"> Placed Order No. 00{key + 1}</p>
                  <table className="table-auto w-full text-left whitespace-no-wrap">
                    <thead>
                      <tr>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                          item no.
                        </th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                          Product Name
                        </th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                          Category
                        </th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                          Price
                        </th>
                        <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {orderItem?.items.map((item, key) => (
                        <tr key={key}>
                          <td className="px-4 py-3">{key + 1}</td>
                          <td className="px-4 py-3">{item?.productName}</td>
                          <td className="px-4 py-3">{item?.category}</td>
                          <td className="px-4 py-3 text-lg text-gray-900">
                            {item?.price}
                          </td>
                          <td className="w-10 text-center">
                            {orderItem?.status}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="flex justify-between mt-4 lg:w-2/3 w-full mx-auto">
                  {/* pass order id */}
                  {orderItem.status == 'CANCELLED' ? (
                    <p className="py-2 text-yellow-600">
                      {' '}
                      This order is being cancelled!
                    </p>
                  ) : (
                    <button
                      onClick={() => handleOrderCancel(orderItem._id)}
                      className="flex  text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded mb-4"
                    >
                      Cancel Order
                    </button>
                  )}

                  <p className="text-yellow-500 inline-flex items-center md:mb-2 lg:mb-0 font-medium">
                    Total amount - {orderItem.totalPrice}
                  </p>
                </div>
                <hr className="p-2" />
              </div>
            ))}
          </div>
        </section>
      ) : (
        <div className="mt-6 text-gray-900">Order Not available</div>
      )}
    </Layout>
  );
};

export default ViewOrder;
