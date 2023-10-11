'use client'
import React from 'react';
import { ComponentData, renderComponent } from '@/declared-components/declared-components';
import dataStructure from '../../temporanydatas/datastructure.json';

function PubblicheAmministrazioni() {
  const pageContent = dataStructure['pubbliche-amministrazioni'] || [];
  return (
    <div>
      {pageContent.map((componentData, index) => renderComponent(componentData as ComponentData, index))}
    </div>
  );
}

export default PubblicheAmministrazioni;