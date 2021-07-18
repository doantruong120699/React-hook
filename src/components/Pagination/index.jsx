import React from 'react';
import PropTypes from 'prop-types';

Pagiantion.propTypes = {
    pagiantion: PropTypes.object.isRequired,
    onPageChange: PropTypes.func,
};
Pagiantion.defaultProps = {
    onPageChange: null,
}

function Pagiantion(props) {
    const { pagiantion, onPageChange } = props;
    const { _page, _limit, _totalRows } = pagiantion;
    const totalPages = Math.ceil(_totalRows / _limit);
    function handlePageChange(newPage) {
        if (onPageChange) {
            onPageChange(newPage);
        }
    }
    return (
        <div>
            <button
                disabled={_page <= 1}
                onClick={() => handlePageChange(_page - 1)}
            >
                Prev
            </button>
            <button
                disabled={_page >= totalPages}
                onClick={() => handlePageChange(_page + 1)}
            >
                Prev
            </button>
        </div>
    );
}

export default Pagiantion;