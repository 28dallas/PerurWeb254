import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './lib/sanity/schemas'

export default defineConfig({
  name: 'perur-rays-of-hope',
  title: 'Perur Rays of Hope',
  
  projectId: 'jyy11ruo',
  dataset: 'production',
  
  plugins: [deskTool(), visionTool()],
  
  schema: {
    types: schemaTypes,
  },
})