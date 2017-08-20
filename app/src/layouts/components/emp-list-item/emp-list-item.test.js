import React from 'react';
import TestUtils from 'react-dom/test-utils';

import { EmpListItem } from './emp-list-item';

test('EmpListItem should be a component', () => {
  const shallowRenderer = TestUtils.createRenderer();

  shallowRenderer.render(
    <EmpListItem>
      List item
    </EmpListItem>
  );

  const component = shallowRenderer.getRenderOutput();

  expect(component.props.children).toContain('List item');
});
