import React from "react";
import CustomPieChart from "../Charts/CustomPieChart";
const COLORS = ["#875CF5", "#FA2C37", "#FF6900"];

const FinanceOverview = ({ totalBalance, totalIncome, totalExpenses }) => {
  const balanceData = [
    { name: "Total Balance", amount: totalBalance },
    { name: "Total Income", amount: totalIncome },
    { name: "Total Expenses", amount: totalExpenses },
  ];
  return (
    <div className="card">
      <div className="flex items-center justify-around">
        <h5 className="text-lg font-medium">Finance Overview</h5>
      </div>

      <CustomPieChart
        data={balanceData}
        colors={COLORS}
        label="Total Balance"
        totalAmount={`$${totalBalance}`}
        showTextAnchor
      />
    </div>
  );
};

export default FinanceOverview;
