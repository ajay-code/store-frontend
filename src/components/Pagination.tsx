import React from "react";
import { Link } from "react-router-dom";

interface Pagination {
    total: number;
    pages: number;
    currentPage?: number;
}

const Pagination: React.FC<Pagination> = ({ total, pages, currentPage }) => {
    currentPage = currentPage || 1;
    return (
        <div className="pagination">
            <div className="pagination__prev">
                {currentPage > 1 && (
                    <Link to={`/stores?page=${currentPage - 1}`}>Prev</Link>
                )}
            </div>
            <div className="pagination__text">
                <p>
                    Page {currentPage} of {pages} — {total} total results
                </p>
            </div>
            <div className="pagination__next">
                {currentPage < pages && (
                    <Link to={`/stores?page=${currentPage + 1}`}>Next</Link>
                )}
            </div>
        </div>
    );
};

export default Pagination;
