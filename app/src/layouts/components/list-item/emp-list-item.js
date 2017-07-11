import React from 'react';
import {ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';

import './emp-list-item.styl';

export const EmpListItem = props => (
  <div className={props.className ? props.className : 'emp-list-item__shadow'}>
    <ListItem
      leftAvatar={<Avatar src="" />}
      primaryText="Brunch this weekend?"
      secondaryText={
        <p>
          <span style={{color: darkBlack}}>{props.children}</span> --
          I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
        </p>
      }
      secondaryTextLines={2}
    />
  </div>
);
