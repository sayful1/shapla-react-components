/*!
 * Shapla React Chip
 * (c) 2020 Sayful Islam
 * Released under the MIT License.
 */
import React from 'react'
import PropTypes from 'prop-types';
import DeleteIcon from '@shapla/react-delete-icon';

class Chip extends React.Component {
  /**
   * Specifies the default values for props:
   */
  static defaultProps = {
    text: '',
    imageSrc: '',
    height: '32px',
    deletable: false,
    small: false,
    onDeleteIconClick: () => {
    },
  };

  /**
   * Specifies props data type
   */
  static propTypes = {
    text: PropTypes.string,
    imageSrc: PropTypes.string,
    height: PropTypes.string,
    deletable: PropTypes.bool,
    small: PropTypes.bool,
    onDeleteIconClick: PropTypes.func,
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
   * Render component UI
   */
  render() {
    return (
      <span className={this.chipClasses()}>
        {this.props.imageSrc && <img className='shapla-chip__contact' src={this.props.imageSrc} alt=''/>}
        <span className="shapla-chip__text">{this.props.children || this.props.text}</span>
        {
          this.props.deletable &&
          <span className='shapla-chip__action'><DeleteIcon onClick={this.props.onDeleteIconClick}/></span>
        }
      </span>
    )
  }

  /**
   * Chip classes
   *
   * @returns {string}
   */
  chipClasses() {
    let classes = ['shapla-chip'];
    if (this.props.deletable) {
      classes.push('shapla-chip--deletable');
    }
    if (this.props.image_src) {
      classes.push('shapla-chip--contact');
    }

    return classes.join(' ');
  }

  /**
   * Chip style
   *
   * @returns {{}}
   */
  chipStyle() {
    let style = {};
    if (this.small) {
      style['--shapla-chip-height'] = '24px';
    }
    if (this.height !== '32px') {
      style['--shapla-chip-height'] = this.height;
    }
    return style;
  }
}

export {Chip};
export default Chip;
