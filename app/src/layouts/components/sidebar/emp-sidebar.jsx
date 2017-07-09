import React from 'react';

import './emp-sidebar.styl';

export const EmpSidebar = props => (
  <aside className='emp-sidebar'>
    {props.children}
  </aside>
);
