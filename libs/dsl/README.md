# @gessa/component-library

Component library for react applications to design applications faster.

# Installation

```
// with npm
npm install --force @gessa/component-library@<version>
// with yarn
yarn add @gessa/component-library@<version>
```

# Library Component Usage

```
import { Barchart, BarChartCard } from '@gessa/component-library';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingData from '../components/LoadingData';
import { SimpleBarChartDataMapping } from '../data-mapper/bar-chart';
import { getChartDataResource } from '../store/gridDataRenderSlice';

export const BarChartComponent = (props: any) => {
  const [componentData, setComponentData] = useState<any>();

  return  (
      <BarChartCard
        headerData={{
        }}
        chartData={{
        }}
        cardProps={componentData?.cardProps}
        actionClicked={(data: any) => {
        }}
      />

  );
};
```
