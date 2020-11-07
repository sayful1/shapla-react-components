import React from 'react'
import PropTypes from 'prop-types';

class Spinner extends React.Component {
  /**
   * Specifies the default values for props:
   */
  static defaultProps = {
    active: true, single: false, showText: false, loadingText: 'Loading...', position: 'fixed', size: 'default'
  };

  /**
   * Specifies props data type
   */
  static propTypes = {
    active: PropTypes.bool,
    single: PropTypes.bool,
    showText: PropTypes.bool,
    loadingText: PropTypes.string,
    position: PropTypes.oneOf(['fixed', 'absolute', 'static']),
    size: PropTypes.oneOf(['default', 'large', 'medium', 'small']),
  }

  /**
   * Class constructor
   *
   * @param props
   */
  constructor(props) {
    super(props);
  }

  /**
   * Called immediately after a component is mounted. Setting state here will trigger re-rendering.
   */
  componentDidMount() {
    this.refreshBodyClass(this.props.active);
  }

  componentDidUpdate(prevProps) {
    if (this.props.active !== prevProps.active) {
      this.refreshBodyClass(this.props.active);
    }
  }

  /**
   * Render component UI
   */
  render() {
    let items = [1, 2, 3, 4].map(item =>
      <div className={this.itemClass(item)} key={item}>
        <div className="shapla-spinner__circle-clipper shapla-spinner__left">
          <div className="shapla-spinner__circle"/>
        </div>
        <div className="shapla-spinner__gap-patch">
          <div className="shapla-spinner__circle"/>
        </div>
        <div className="shapla-spinner__circle-clipper shapla-spinner__right">
          <div className="shapla-spinner__circle"/>
        </div>
      </div>
    );

    if (!this.props.active) {
      return null;
    }

    return (
      <div className={this.containerClass()}>
        <div className={this.innerClass()}>
          <div className={this.spinnerClass()}>
            {items}
          </div>
          {this.props.showText && <div className="shapla-spinner-text">{this.props.loadingText}</div>}
        </div>
      </div>
    )
  }

  /**
   * Button classes
   *
   * @returns {string}
   */
  containerClass() {
    let classes = ['shapla-spinner-container'];
    classes.push(`is-${this.props.position}`);

    return classes.join(' ');
  }

  innerClass() {
    let classes = ['shapla-spinner-inner'];
    if (this.props.showText) {
      classes.push(`has-text`);
    }

    return classes.join(' ');
  }

  spinnerClass() {
    let classes = ['shapla-spinner'];
    classes.push(`is-${this.props.size}`);
    if (this.props.single) {
      classes.push('shapla-spinner-container');
    }
    return classes.join(' ')
  }

  itemClass(index) {
    return ['shapla-spinner__layer', 'shapla-spinner__layer-' + index].join(' ');
  }

  refreshBodyClass(active) {
    if (active) {
      document.querySelector('body').classList.add('has-shapla-spinner');
    } else {
      document.querySelector('body').classList.remove('has-shapla-spinner');
    }
  }
}

export {Spinner}
export default Spinner;
