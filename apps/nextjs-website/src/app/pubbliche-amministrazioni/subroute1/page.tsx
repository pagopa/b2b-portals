'use client'
import React from 'react';
import { ComponentData, renderComponent } from '@/declared-components/declared-components';
import dataStructure from '../../temporanydatas/datastructure.json';

function Subroute1() {
  const pageContent = dataStructure['subroute1'] || [];
  return (
    <div>
      {pageContent.map((componentData, index) => renderComponent(componentData as ComponentData, index))}
    </div>
  );
}

export default Subroute1;