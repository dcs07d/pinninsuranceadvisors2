import React, { createContext, useContext, useState } from 'react';

interface FunnelContextType {
  step: number;
  setStep: (step: number) => void;
  goNext: () => void;
  goBack: () => void;
  formData: any;
  updateFormData: (data: any) => void;
  totalSteps: number;
}

const FunnelContext = createContext<FunnelContextType | undefined>(undefined);

export function FunnelProvider({ children }: { children: React.ReactNode }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const totalSteps = 4;

  const goNext = () => setStep(Math.min(step + 1, totalSteps));
  const goBack = () => setStep(Math.max(step - 1, 1));
  const updateFormData = (data: any) => setFormData({ ...formData, ...data });

  return (
    <FunnelContext.Provider value={{
      step,
      setStep,
      goNext,
      goBack,
      formData,
      updateFormData,
      totalSteps
    }}>
      {children}
    </FunnelContext.Provider>
  );
}

export function useFunnel() {
  const context = useContext(FunnelContext);
  if (!context) throw new Error('useFunnel must be used within FunnelProvider');
  return context;
}