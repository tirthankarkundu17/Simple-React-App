import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    tags: []
  };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // styles = {
  //   fontSize: 10,
  //   fontWeight: "bold"
  // };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;
    return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
  }

  handleIncrement = product => {
    console.log(product);
    console.log("Increment clicked", this.state.value);
    this.setState({ cont: this.state.value++ });
  };

  render() {
    console.log("props", this.props);
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {this.state.tags.length === 0 && "Please create a new Tag!"}
        {this.renderTags()}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value == 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
