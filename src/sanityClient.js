import { createClient } from '@sanity/client';

const projectId = process.env.REACT_APP_GPI_SANITY_PROJECT_ID;

export const client = createClient({
  projectId: projectId,
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
});