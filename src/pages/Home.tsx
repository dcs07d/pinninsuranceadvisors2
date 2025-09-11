import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import HeroSection from '../components/home/HeroSection';
import CarrierLogos from '../components/sections/CarrierLogos';
import QuizVideoSection from '../components/sections/QuizVideoSection';
import GetStartedSection from '../components/home/GetStartedSection';
import ReviewSection from '../components/home/ReviewSection';

export default function Home() {
  return (
    <MainLayout transparentNav>
      <HeroSection />
      <CarrierLogos />
      <QuizVideoSection />
      <GetStartedSection />
      <ReviewSection />
    </MainLayout>
  );
}