import React from 'react';
import SideBar from './SideBar.js';
import './DashBoard.css';
import MetaData from '../layout/MetaData';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Doughnut, Line } from 'react-chartjs-2';
import { useSelector, useDispatch } from 'react-redux';
import { getAdminProduct } from '../../actions/productAction';
import { getAllOrders } from '../../actions/orderAction.js';
import { getAllUsers } from '../../actions/userAction.js';
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js'; 
Chart.register(CategoryScale);

const DashBoard = () => {
  const lineState = {
    labels: ['Initial Amount', 'Amount Earned'],
    datasets: [
      { 
        label: 'TOTAL AMOUNT',
        backgroundColor: ['tomato'],
        hoverBackgroundColor: ['rgb(197, 72, 49)'],
        data: [0, 4000],
      },
    ],
  };

  const doughnutState = {
    labels: ['Out of Stock', 'InStock'],
    datasets: [
      {
        backgroundColor: ['#00A6B4', '#6800B4'],
        hoverBackgroundColor: ['#4B5000', '#35014F'],
        data: [2, 10],
      },
    ],
  };
  return (
    <div className="dashboard">
      <MetaData title="Dashboard - Admin Panel" />
      <SideBar />

      <div className="dashboardContainer">
        <Typography component="h1">Dashboard</Typography>

        <div className="dashboardSummary">
          <div>
            <p>
              Total Amount <br /> $2000
            </p>
          </div>
          <div className="dashboardSummaryBox2">
            <Link to="/admin/products">
              <p>Product</p>
              <p>50</p>
            </Link>
            <Link to="/admin/orders">
              <p>Orders</p>
              <p>4</p>
            </Link>
            <Link to="/admin/users">
              <p>Users</p>
              <p>3</p>
            </Link>
          </div>
        </div>
        <div className="lineChart">
          <Line data={lineState} />
        </div>

        <div className="doughnutChart">
          <Doughnut data={doughnutState} />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
