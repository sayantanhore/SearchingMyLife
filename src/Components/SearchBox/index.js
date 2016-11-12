import React, {Component} from 'react';
import $ from 'jquery';
import store from '../../store';
require('./SearchBox.scss');

export default class SearchBox extends Component {
  constructor() {
    super();
  }
  search(event) {
    if(event.keyCode === 13) {
      $.ajax({
        url: '/search/words/' + $(event.target).val(),
        type: 'GET',
      }).done((data) => {
        store.setData(data);
        console.log(store.getData());
      }).fail((err) => {
        console.log(err);
      });
    }
  }
  render() {
    return (
      <div className="div__searchbox">
        <input
        className="input-text__search"
        type="text"
        placeholder="Enter your query ..."
        onKeyDown={this.search}/>
      </div>
    );
  }
}
