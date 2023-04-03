import React, { useState, useEffect } from "react";
import "../styles/pagination.scss";

interface PaginationProps {
    totalItems: number;
    perPage: number;
    currentPage: number;
    size?: "default" | "small" | "medium" | "large";
    textName?: string;
    textNameSingular?: string;
    textCurrentPage?: string;
    textFirstPage?: string;
    textPreviousPage?: string;
    textNextPage?: string;
    textLastPage?: string;
    textOf?: string;
    paginate: (page: number) => void;
}
const Pagination: React.FC<PaginationProps> = ({
    totalItems,
    perPage,
    currentPage,
    size = "default",
    textName = "items",
    textNameSingular = "item",
    textCurrentPage = "Current Page",
    textFirstPage = "First page",
    textPreviousPage = "Previous page",
    textNextPage = "Next page",
    textLastPage = "Last page",
    textOf = "of",
    paginate,
}) => {
    const [disableFirst, setDisableFirst] = useState<boolean>(false);
    const [disablePrev, setDisablePrev] = useState<boolean>(false);
    const [disableNext, setDisableNext] = useState<boolean>(false);
    const [disableLast, setDisableLast] = useState<boolean>(false);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [displayingNum, setDisplayingNum] = useState<string>("");

    useEffect(() => {
        setTotalPages(Math.ceil(totalItems / perPage));
        setDisableFirst(currentPage < 3);
        setDisablePrev(currentPage < 2);
        setDisableNext(currentPage >= totalPages);
        setDisableLast(currentPage >= totalPages - 1);
        setDisplayingNum(
            `${totalItems} ${totalItems > 1 ? textName : textNameSingular}`
        );
    }, [
        totalItems,
        perPage,
        currentPage,
        size,
        textName,
        textNameSingular,
        textCurrentPage,
        textFirstPage,
        textPreviousPage,
        textNextPage,
        textLastPage,
        textOf,
        totalPages,
    ]);

    const emitEvent = (page: number) => paginate(page);
    const goToPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        let page = parseInt(event.target.value);
        if (isNaN(page)) page = currentPage;
        if (page < 1) page = 1;
        if (page > totalPages) page = totalPages;

        emitEvent(page);
    };
    const nextPage = () => !disableNext ? emitEvent(currentPage + 1) : false;
    const prePage = () => !disablePrev ? emitEvent(currentPage - 1) : false;
    const firstPage = () => (!disableFirst ? emitEvent(1) : false);
    const lastPage = () => !disableLast ? emitEvent(totalPages) : false;

    const navClasses = `shapla-pagination is-${size}`;

    return (
        <nav className={navClasses} role="navigation" aria-label="pagination">
            <span className="shapla-pagination-displaying-num">{displayingNum}</span>
            <span className="shapla-pagination-links">
                <a
                    className={"shapla-pagination-link shapla-pagination-previous-page " + (disablePrev ? "is-disabled" : "")}
                    href="#"
                    role="button"
                    onClick={prePage}
                >
                    <span className="screen-reader-text sr-only">
                        {textPreviousPage}
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                        <path fill="none" d="M0 0h24v24H0z" />
                    </svg>
                </a>
                <a
                    className={`shapla-pagination-link shapla-pagination-previous-page ${disablePrev ? 'is-disabled' : ''}`}
                    href="#"
                    role="button"
                    onClick={(e) => {
                        e.preventDefault();
                        prePage();
                    }}>

                    {!disablePrev && (
                        <span className="screen-reader-text sr-only">{textPreviousPage}</span>
                    )}
                    <svg
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                        <path fill="none" d="M0 0h24v24H0z" />
                    </svg>
                </a>
                <span className="shapla-pagination-input-container">
                    <label htmlFor="current-page-selector" className="screen-reader-text sr-only">{
                        textCurrentPage
                    }</label>
                    <input
                        id="current-page-selector"
                        type="text"
                        className="shapla-pagination-current-page"
                        min="1"
                        value={currentPage}
                        max={totalPages}
                        aria-describedby="table-paging"
                        onChange={goToPage}
                    />
                    <span className="shapla-pagination-paging-text">
                        {textOf}
                        <span className="shapla-pagination-total-pages">{totalPages}</span>
                    </span>
                </span>
                <a
                    href="#"
                    className={`shapla-pagination-link shapla-pagination-next-page ${disableNext ? 'is-disabled' : ''}`}
                    role="button"
                    onClick={(e) => { e.preventDefault(); nextPage(); }}
                >
                    {!disableNext && <span className="screen-reader-text sr-only">{textNextPage}</span>}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                        <path d="M0 0h24v24H0z" fill="none" />
                    </svg>
                </a>

                <a
                    href="#"
                    className={`shapla-pagination-link shapla-pagination-last-page ${disableLast ? 'is-disabled' : ''}`}
                    role="button"
                    onClick={(e) => { e.preventDefault(); lastPage(); }}
                >
                    {!disableLast && <span className="screen-reader-text sr-only">{textLastPage}</span>}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z" />
                        <path fill="none" d="M0 0h24v24H0V0z" />
                    </svg>
                </a>

            </span>

        </nav >
    )
}


export default Pagination;