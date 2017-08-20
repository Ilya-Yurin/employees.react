import React, {Component} from 'react';
import Chip from 'material-ui/Chip';
import AutoComplete from 'material-ui/AutoComplete';
import './emp-tag-input.styl';
import _ from 'lodash';

const MAX_TAG_COUNT = 8;

export class EmpTagInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    };
  }

  render() {
    const addTag = newTag => {
      this.setState({searchText: ''});
      if(!_.find(_.get(this.props, 'tags.list', []), ['name', newTag])) {
        this.props.onCreateTag({name: newTag});
      }
      this.props.onAddSkill(newTag);
    };
    const deleteTag = index => {
      this.props.onDeleteSkill(index);
    };
    const updateInput = searchText => this.setState({searchText: searchText});
    const employeeTags = _.get(this.props, 'skills', []);
    const availableTags = _.reduce(_.get(this.props, 'tags.list', []), (availableTags, tag) => {
      if(!_.includes(employeeTags, tag.name)) {
        availableTags.push(tag.name);
      }
      return availableTags;
    }, []);

    const tagsList = _.map(employeeTags, (tag, key) => {
      return (
        <Chip
          className="emp-tag-input__skill"
          onRequestDelete={() => deleteTag(key)}
          key={key}
          labelStyle={{fontSize: '16px', color: '#fff'}}>
          {tag}
        </Chip>
      );
    });

    return (
      <div className="emp-tag-input">
        {tagsList}
        <AutoComplete
          className="emp-tag-input__auto-complete"
          style={_.size(tagsList) >= MAX_TAG_COUNT ? {display: 'none'} : {}}
          filter={AutoComplete.caseInsensitiveFilter}
          underlineShow={false}
          hintText="typing..."
          dataSource={availableTags}
          onNewRequest={addTag}
          onUpdateInput={updateInput}
          searchText={this.state.searchText}/>
      </div>
    );
  }
}
;
