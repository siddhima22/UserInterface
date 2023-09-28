import React from 'react';
import { createRoot } from 'react-dom/client';

import { PieChart } from './App.jsx';

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(<PieChart />);
}
