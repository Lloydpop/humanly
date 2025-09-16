'use client'
import Spline from '@splinetool/react-spline/next';

export default function Spliner() {
  return (
    <main className="w-full h-screen">
      <Spline scene="https://prod.spline.design/your-scene-id/scene.splinecode" />
    </main>
  );
}
