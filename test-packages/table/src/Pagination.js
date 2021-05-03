import React from "react";
import PropTypes from "prop-types";

class Pagination extends React.Component {
  /**
   * Specifies the default values for props:
   */
  static defaultProps = {
    totalItems: 0,
    perPage: 20,
    currentPage: 1,
    size: 'default',
    onPaginate: () => {
    },
    textName: 'items',
    textNameSingular: 'item',
    textCurrentPage: 'current page',
    textFirstPage: 'first page',
    textPreviousPage: 'previous page',
    textNextPage: 'next page',
    textLastPage: 'last page',
    textOf: 'of',
  }

  /**
   * Specifies props data type
   */
  static propTypes = {
    totalItems: PropTypes.number,
    perPage: PropTypes.number,
    currentPage: PropTypes.number,
    size: PropTypes.oneOf(['default', 'small', 'medium', 'large']),
    onPaginate: PropTypes.func,
  }

  constructor(props) {
    super(props);

    this.total_pages = this.total_pages.bind(this);
    this.disable_first = this.disable_first.bind(this);
    this.disable_prev = this.disable_prev.bind(this);
    this.disable_next = this.disable_next.bind(this);
    this.disable_last = this.disable_last.bind(this);
    this.goToPage = this.goToPage.bind(this);
    this.goToFirstPage = this.goToFirstPage.bind(this);
    this.goToPreviousPage = this.goToPreviousPage.bind(this);
    this.goToNextPage = this.goToNextPage.bind(this);
    this.goToLastPage = this.goToLastPage.bind(this);
  }

  /**
   * Render component UI
   */
  render() {
    let navFirstClasses = ['shapla-pagination-link', 'shapla-pagination-first-page'];
    if (this.disable_first()) navFirstClasses.push('is-disabled');
    let navFirstPage = (
      <a href="#" role="button" onClick={this.goToFirstPage} className={navFirstClasses.join(' ')}>
        {!this.disable_first() && <span className="screen-reader-text sr-only">{this.props.textFirstPage}</span>}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"/>
          <path fill="none" d="M24 24H0V0h24v24z"/>
        </svg>
      </a>
    )
    let navPreviousClasses = ['shapla-pagination-link', 'shapla-pagination-previous-page'];
    if (this.disable_prev()) navPreviousClasses.push('is-disabled');
    let navPreviousPage = (
      <a href="#" role="button" onClick={this.goToPreviousPage} className={navPreviousClasses.join(' ')}>
        {!this.disable_prev() && <span className="screen-reader-text sr-only">{this.props.textPreviousPage}</span>}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
          <path fill="none" d="M24 24H0V0h24v24z"/>
        </svg>
      </a>
    )
    let navNextClasses = ['shapla-pagination-link', 'shapla-pagination-next-page'];
    if (this.disable_next()) navNextClasses.push('is-disabled');
    let navNextPage = (
      <a href="#" role="button" onClick={this.goToNextPage} className={navNextClasses.join(' ')}>
        {!this.disable_next() && <span className="screen-reader-text sr-only">{this.props.textNextPage}</span>}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
          <path fill="none" d="M24 24H0V0h24v24z"/>
        </svg>
      </a>
    )
    let navLastClasses = ['shapla-pagination-link', 'shapla-pagination-last-page'];
    if (this.disable_last()) navLastClasses.push('is-disabled');
    let navLastPage = (
      <a href="#" role="button" onClick={this.goToLastPage} className={navLastClasses.join(' ')}>
        {!this.disable_last() && <span className="screen-reader-text sr-only">{this.props.textLastPage}</span>}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"/>
          <path fill="none" d="M24 24H0V0h24v24z"/>
        </svg>
      </a>
    )

    let paginationLink = (
      <span className="shapla-pagination-links">
        {navFirstPage}
        {navPreviousPage}
        <span className="shapla-pagination-input-container">
          <label htmlFor="current-page-selector"
                 className="screen-reader-text sr-only">{this.props.textCurrentPage}</label>
          <input type="text" id="current-page-selector" className="shapla-pagination-current-page" min={1}
                 max={this.props.totalItems} value={this.props.currentPage} aria-describedby="table-paging"
                 onChange={this.goToPage}
          />
          <span className="shapla-pagination-paging-text">
            {this.props.textOf}
            <span className="shapla-pagination-total-pages"> {this.total_pages()}</span>
          </span>
        </span>
        {navNextPage}
        {navLastPage}
      </span>
    )
    return (
      <nav className={this.navClasses()} role="navigation" aria-label="pagination">
        <span className="shapla-pagination-displaying-num">{this.displaying_num()}</span>
        {this.total_pages() > 1 && paginationLink}
      </nav>
    )
  }

  goToFirstPage() {
    if (!this.disable_first()) {
      return this.props.onPaginate(1);
    }
  }

  goToPreviousPage() {
    if (!this.disable_prev()) {
      return this.props.onPaginate(this.props.currentPage - 1);
    }
  }

  goToNextPage() {
    if (!this.disable_next()) {
      return this.props.onPaginate(this.props.currentPage + 1);
    }
  }

  goToLastPage() {
    if (!this.disable_last()) {
      return this.props.onPaginate(this.total_pages());
    }
  }

  goToPage(event) {
    let page = parseInt(event.target.value);
    if (isNaN(page)) page = this.props.currentPage;
    if (page < 1) page = 1;
    if (page > this.total_pages()) page = this.total_pages();

    this.props.onPaginate(page);
  }

  /**
   * Disable first nav
   *
   * @returns {boolean}
   */
  disable_first() {
    return this.props.currentPage < 3;
  }

  /**
   * Disable previous nav
   *
   * @returns {boolean}
   */
  disable_prev() {
    return this.props.currentPage < 2;
  }

  /**
   * Disable next nav
   *
   * @returns {boolean}
   */
  disable_next() {
    return this.props.currentPage >= this.total_pages();
  }

  /**
   * Disable last nav
   *
   * @returns {boolean}
   */
  disable_last() {
    return this.props.currentPage >= (this.total_pages() - 1);
  }

  /**
   * Get current page number
   *
   * @returns {string}
   */
  displaying_num() {
    const {totalItems, textName, textNameSingular} = this.props;
    if (totalItems > 1) {
      return `${totalItems} ${textName}`;
    }
    return `${totalItems} ${textNameSingular}`;
  }

  /**
   * Total pages
   *
   * @returns {number}
   */
  total_pages() {
    return Math.ceil(this.props.totalItems / this.props.perPage)
  }

  /**
   * Nav classes
   */
  navClasses() {
    let classes = ['shapla-pagination'];
    if (this.props.size !== 'default') classes.push(`is-${this.props.size}`);
    return classes.join(' ')
  }
}

export {Pagination}
export default Pagination;
