import React from 'react';
import styled from 'styled-components';
import { PieChart, BarChart } from '@toast-ui/react-chart';
import '@toast-ui/chart/dist/toastui-chart.min.css';

const data = {
  categories: ['Browser'],
  series: [
    {
      name: '행복',
      data: 5,
    },
    {
      name: '슬픔',
      data: 2,
    },
    {
      name: '놀람',
      data: 4,
    },
    {
      name: '화남',
      data: 7,
    },
    {
      name: '평온(중립)',
      data: 8,
    },
    {
      name: 'Etc',
      data: 7,
    },
  ],
};

const options = {
  chart: {
    width: 700,
    height: 500,
    title: `${'OOO님 성향유형'}`,
    format: '1,000',
  },
  yAxis: {
    title: 'Month',
  },
  xAxis: {
    title: 'Amount',
    min: 0,
    max: 9000,
    suffix: '$',
  },
  series: {
    showLabel: true,
    selectable: true,
    clockwise: false,
    dataLabels: {
      visible: true,
      anchor: 'outer',
    },
  },
};

const BottomSectorContainer = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
`;
const BottomSectorTitle = styled.h1``;
const BottomGraphDiv = styled.div`
  display: block;
  justify-content: center;
`;
function ResultGraph() {
  return (
    <BottomSectorContainer>
      <BottomSectorTitle>OOO님 분석 결과</BottomSectorTitle>
      <BottomGraphDiv>
        <PieChart data={data} options={options} />
      </BottomGraphDiv>
    </BottomSectorContainer>
  );
}

export default ResultGraph;