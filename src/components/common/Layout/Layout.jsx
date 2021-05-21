import * as React from 'react';
import PropTypes from 'prop-types';
import { Header } from '../Header/Header';
import './Layout.css';

export const Layout = ({ children }) => (
  <>
    <Header />
    <main className="max-w-screen-sm mx-auto text-white font-sans px-5 mb-14">
      {children}
    </main>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
