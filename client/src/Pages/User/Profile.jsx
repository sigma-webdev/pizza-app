import React from 'react';
import { Layout } from '../../Layout/Layout';
import { useLocation } from 'react-router-dom';

const Profile = () => {
  const location = useLocation();
  console.log(location.pathname);
  return <Layout> Profile section </Layout>;
};

export default Profile;
