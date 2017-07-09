import React from 'react';
import TestUtils from 'react-dom/test-utils';

import { EmpHeader } from './emp-header';

test('EmpHeader should be a component', () => {
  const shallowRenderer = TestUtils.createRenderer();

  shallowRenderer.render(
    <EmpHeader>
      Header Text
    </EmpHeader>
  );

  const component = shallowRenderer.getRenderOutput();

  expect(component.props.children).toContain('Header Text');
});
