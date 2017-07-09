import React from 'react';
import TestUtils from 'react-dom/test-utils';

import { EmpSidebar } from './emp-sidebar';

test('EmpSidebar should be a component', () => {
  const shallowRenderer = TestUtils.createRenderer();

shallowRenderer.render(
  <EmpSidebar>
    Sidebar Text
  </EmpSidebar>
);

const component = shallowRenderer.getRenderOutput();

expect(component.props.children).toBe('Sidebar Text');
});
