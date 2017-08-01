import React from 'react';
import TestUtils from 'react-dom/test-utils';

import { EmpTagInput } from './emp-tag-input';

test('EmpTagInput should be a component', () => {
  const shallowRenderer = TestUtils.createRenderer();

  shallowRenderer.render(
    <EmpTagInput>
      Skills tags
    </EmpTagInput>
  );

  const component = shallowRenderer.getRenderOutput();

  expect(component.props.children).toBe('Skills tags');
});
