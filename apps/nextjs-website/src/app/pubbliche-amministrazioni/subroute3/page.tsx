'use client'
import React from 'react';
import { ComponentData, renderComponent } from '@/declared-components/declared-components';
import pageData from '../../temporanydatas/datastructure.json';

function Subroute3() {
  return (
    <div>
      {pageData.map((componentData, index) => renderComponent(componentData as ComponentData, index))}
    </div>
  );
}

export default Subroute3;