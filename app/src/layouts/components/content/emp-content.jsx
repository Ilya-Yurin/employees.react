import React from 'react';
import { EmpAdd } from '../emp-add/emp-add';
import { EmpInfo } from '../emp-info/emp-info';

import './emp-content.styl';

export const EmpContent = props => (
  <main className='emp-content'>
    <EmpInfo>
      {props.children}
    </EmpInfo>
  </main>
);
