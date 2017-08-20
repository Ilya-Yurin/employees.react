import React from 'react';
import TestUtils from 'react-dom/test-utils';

import { EmpAdd } from './emp-router-switch';

test('EmpAdd should be a component', () => {
  const shallowRenderer = TestUtils.createRenderer();

  shallowRenderer.render(
    <EmpAdd>
      Add employee
    </EmpAdd>
  );

  const component = shallowRenderer.getRenderOutput();

  expect(component.props.children).toBe('Add employee');
});
