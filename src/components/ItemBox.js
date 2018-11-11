import React, { Component } from 'react';

class ItemBox extends Component {
  render() {
    return (
      <div>
        <ItemTitle title="Placeholder Title" />
        <ItemImage image-source="#" />
        <Category category="placeholder category" />
        <DateModified date="placeholder date" />
      </div>
    );
  }
}

class ItemTitle extends Component {
  render() {
    return (
      <h3 class="item-title">{this.props.title}</h3>
    );
  }
}

class ItemImage extends Component {
  render() {
    return (
      <img src="{this.props.image-source}" alt="alternate item image" />
    );
  }
}

class ItemDescription extends Component {
  render() {
    return (
      <div class="description">
        <p>
          {this.props.description}
        </p>
      </div>
    );
  }
}

class Category extends Component {
  render() {
    return (
      <div class="category">
        {this.props.category}
      </div>
    );
  }
}

class DateModified extends Component {
  render() {
    return (
    <div class="date-modified">
      {this.props.date}
    </div>
    );
  }
}

export default ItemBox;
