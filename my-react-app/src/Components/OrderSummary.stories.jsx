// export default {
//     title: 'Components/OrderSummary',
//     component: OrderSummary,
//   };
  
//   const Template = (args) => <OrderSummary {...args} />;
  
//   export const Default = Template.bind({});
//   Default.args = {};

import React from "react";
import OrderSummary from "./OrderSummary.jsx"; // Ensure the correct import path

export default {
  title: "Components/OrderSummary",
  component: OrderSummary,
};

const Template = (args) => <OrderSummary {...args} />;

export const Default = Template.bind({});
Default.args = {};