import React from 'react';
import TestUtils from 'react-dom/test-utils';

import { EmpSelect } from './emp-select';

test('EmpSelect should be a component', () => {
  const shallowRenderer = TestUtils.createRenderer();

  shallowRenderer.render(
    <EmpSelect>
      Select text
    </EmpSelect>
  );

  const component = shallowRenderer.getRenderOutput();

  expect(component.props.children).toContain('Select text');
});
