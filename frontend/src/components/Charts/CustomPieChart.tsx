import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import CustomTooltip from './CustomToolTip';
import CustomLegend from './CustomLegend';
const CustomPieChart = ({ data, colors, label, totalAmount, showTextAnchor }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
        <PieChart>
            <Pie
                data={data}
                dataKey="amount"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={100}
                outerRadius={130}
                labelLine={false}
            >
              {data.map((entry, index) => {
  return <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />;
})}

              </Pie>
              <Tooltip content={CustomTooltip}/>
              <Legend content={(props) => <CustomLegend payload={props.payload} />} />

              {showTextAnchor && (
                <>
                  <text 
                   x="50%"
                   y="50%"
                   dy={-25}
                   textAnchor="middle"
                   fill="#999"
                   fontSize="14px"
                  >
                    {label}
                  </text>
                  <text
                   x="50%"
                   y="50%"
                   dy={8}
                   textAnchor="middle"
                   fill="#333"
                   fontSize="24px"
                   fontWeight="semi-bold"
                  >
                    {totalAmount}
                  </text>
                </>
              )}
        </PieChart>
    </ResponsiveContainer>
  )
}

export default CustomPieChart 