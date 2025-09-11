import React from 'react';
import { FunnelProvider } from './FunnelContext';
import FunnelLayout from './FunnelLayout';
import BasicInfo from './steps/BasicInfo';
import Coverage from './steps/Coverage';
import Preferences from './steps/Preferences';
import Schedule from './steps/Schedule';
import { useFunnel } from './FunnelContext';

function FunnelSteps() {
  const { step } = useFunnel();

  switch (step) {
    case 1:
      return <BasicInfo />;
    case 2:
      return <Coverage />;
    case 3:
      return <Preferences />;
    case 4:
      return <Schedule />;
    default:
      return null;
  }
}

export default function SalesFunnel() {
  return (
    <FunnelProvider>
      <FunnelLayout>
        <FunnelSteps />
      </FunnelLayout>
    </FunnelProvider>
  );
}