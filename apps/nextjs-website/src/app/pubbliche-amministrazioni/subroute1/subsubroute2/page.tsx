'use client'
import React from 'react';
import { ComponentData, renderComponent } from '@/declared-components/declared-components';
import dataStructure from '../../temporanydatas/datastructure.json';

function Subsubroute2() {
  const pageContent = dataStructure['subsubroute2'] || [];
  return (
    <div>
      {pageContent.map((componentData, index) => renderComponent(componentData as ComponentData, index))}
    </div>
  );
}

export default Subsubroute2;