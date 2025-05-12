import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { SimpleTestCardBluePage } from './SimpleTestCardBluePage';

// This creates a Backstage App that renders the SimpleTestCardBluePage
// It's a lightweight way to develop and test your plugin component in isolation
createDevApp()
  .addPage({
    element: <SimpleTestCardBluePage />,
    title: 'Simple Test Card Blue Dev',
    path: '/simple-test-card-blue-dev', // The URL path for this dev page
  })
  .render();
