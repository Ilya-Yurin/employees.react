import React from 'react';
import TestUtils from 'react-dom/test-utils';

import { EmpList } from './emp-list';

test('EmpList should be a component', () => {
  const shallowRenderer = TestUtils.createRenderer();

  shallowRenderer.render(
    <EmpList>
      Employee list
    </EmpList>
  );

  const component = shallowRenderer.getRenderOutput();

  expect(component.props.children).toContain('Employee list');
});
