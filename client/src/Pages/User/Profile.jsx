import React from 'react';
import { Layout } from '../../Layout/Layout';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Profile = () => {
  const userData = useSelector((state) => state?.auth?.data);
  console.log(userData);

  return (
    <Layout>
      {/* profile image and name */}
      <section className="py-4 2xl:py-3">
        <div className="flex items-center justify-center gap-4 py-5 2xl:py-32">
          <div className="border rounded-full">
            {/* TODO: update image */}
            <svg
              width="150"
              height="150"
              viewBox="0 0 21 20"
              fill="#666666"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.2637 17.0971C19.1505 15.3191 20.3284 12.7971 20.3284 10C20.3284 4.61522 15.9631 0.25 10.5784 0.25C5.19359 0.25 0.828369 4.61522 0.828369 10C0.828369 12.7971 2.00622 15.3191 3.893 17.0971C5.63849 18.7419 7.99071 19.75 10.5784 19.75C13.166 19.75 15.5183 18.7419 17.2637 17.0971ZM4.72349 15.8123C6.09798 14.0978 8.20997 13 10.5784 13C12.9468 13 15.0588 14.0978 16.4332 15.8123C14.9386 17.3178 12.8674 18.25 10.5784 18.25C8.28937 18.25 6.2181 17.3178 4.72349 15.8123ZM14.3284 7C14.3284 9.07107 12.6494 10.75 10.5784 10.75C8.5073 10.75 6.82837 9.07107 6.82837 7C6.82837 4.92893 8.5073 3.25 10.5784 3.25C12.6494 3.25 14.3284 4.92893 14.3284 7Z"
                fill="#666666"
              />
            </svg>
          </div>

          <div>
            <p> {userData.firstName} </p>

            <div className="flex items-center justify-center gap-2 ">
              <Link to={'orders'} className="text-center border w-28">
                {' '}
                <button> View Orders </button>
              </Link>
              <Link to={'/profile/details'} className="text-center border w-28">
                {' '}
                <button> Edit details </button>
              </Link>
              <Link to={'/profile/edit'} className="text-center border w-28">
                {' '}
                <button> Change password </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-1/3 py-4 mx-auto 2xl:pb-40">
          <h3 className="mb-4 text-lg font-semibold">Profile Details</h3>
          <div className="grid grid-cols-2 gap-10 py-4">
            <div>
              <p className="text-sm text-gray-600">First Name:</p>
              <p className="text-lg font-semibold"> {userData?.firstName}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">last Name:</p>
              <p className="text-lg font-semibold">
                {' '}
                {userData?.lastName ? userData?.lastName : 'NA'}{' '}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-600">Email Address:</p>
              <p className="text-lg font-semibold"> {userData?.email} </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Mobile Number</p>
              <p className="text-lg font-semibold">
                {' '}
                {userData?.mobileNumber ? userData?.mobileNumber : 'NA'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Profile;
