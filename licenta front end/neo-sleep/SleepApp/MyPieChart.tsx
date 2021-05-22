import React from 'react';
import { VictoryPie } from 'victory-native';

export default function MyPieChart({ data }: any): JSX.Element {

  return (
    
    <VictoryPie
      data={data}
      width={190}
      height={190}
      labels={({ datum }) => ""}
      innerRadius={30}
        
    />
    
  )
}
