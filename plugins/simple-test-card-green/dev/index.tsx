import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { SimpleTestCardGreenPage } from './SimpleTestCardGreenPage';

// This creates a Backstage App that renders the SimpleTestCardGreenPage
// It's a lightweight way to develop and test your plugin component in isolation
createDevApp()
  .addPage({
    element: <SimpleTestCardGreenPage />,
    title: 'Simple Test Card Green Dev',
    path: '/simple-test-card-green-dev', // The URL path for this dev page
  })
  .render();
