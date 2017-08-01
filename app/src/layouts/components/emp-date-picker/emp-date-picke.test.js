import React from 'react';
import TestUtils from 'react-dom/test-utils';

import { EmpDatePicker } from './emp-date-picker';

test('EmpDatePicker should be a component', () => {
  const shallowRenderer = TestUtils.createRenderer();

  shallowRenderer.render(
    <EmpDatePicker>
      Current date
    </EmpDatePicker>
  );

  const component = shallowRenderer.getRenderOutput();

  expect(component.props.children).toContain('Current date');
});
