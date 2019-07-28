// import React from 'react'
import createG2 from 'g2-react';
import { Stat } from 'g2';
const GenderPie = createG2(chart => {
  chart.coord('theta');
  chart.intervalStack()
       .position(Stat.summary.proportion())
       .color('gender',['#FF0033','#3399FF']);
  chart.render();
});
export default GenderPie;