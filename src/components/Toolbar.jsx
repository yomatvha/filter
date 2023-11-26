import React from "react";

class Toolbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="toolbar">
        {this.props.filters.map((el) => 
          <button key={el.id} className={(el.category === this.props.selected) ? 'active' : ''} onClick={this.props.onSelectFilter}>
            {el.category}
          </button>
        )}
      </div>
    )
  }
}

export default Toolbar
