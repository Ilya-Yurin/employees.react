import React from 'react';
import TestUtils from 'react-dom/test-utils';

import { EmpContent } from './emp-content';

test('EmpContent should be a component', () => {
  const shallowRenderer = TestUtils.createRenderer();

  shallowRenderer.render(
    <EmpContent>
      Content Text
    </EmpContent>
  );

  const component = shallowRenderer.getRenderOutput();

  expect(component.props.children).toBe('Content Text');
});
