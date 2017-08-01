import React from 'react';
import { EmpAdd } from '../emp-add/emp-add';

import './emp-content.styl';

export const EmpContent = props => (
  <main className='emp-content'>
    <EmpAdd>
      {props.children}
    </EmpAdd>
  </main>
);
