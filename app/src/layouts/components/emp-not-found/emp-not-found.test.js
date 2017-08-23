import React from 'react';
import TestUtils from 'react-dom/test-utils';

import { EmpNotFound } from './emp-not-found';

test('EmpNotFound should be a component', () => {
  const shallowRenderer = TestUtils.createRenderer();

  shallowRenderer.render(
    <EmpNotFound>
      Not Found
    </EmpNotFound>
  );

  const component = shallowRenderer.getRenderOutput();

  expect(component.props.children).toBe('Not Found');
});
