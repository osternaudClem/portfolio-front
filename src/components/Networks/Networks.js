import React from 'react';
import NetworksDatas from '../../datas/networks';
// Components
import { Network } from '.';

const Networks = () => {
  return (
    <div>
      {NetworksDatas.map(network => (
        <Network network={network} key={`network-${network.label}`} />
      ))}
    </div>
  );
};

export default Networks;
