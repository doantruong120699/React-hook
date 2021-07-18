import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

PostFiltersForm.propTypes = {
    onSubmit: PropTypes.func,
};
PostFiltersForm.defaultProps = {
    onSubmit: null,
}

function PostFiltersForm(props) {
    const { onSubmit } = props;
    const [searchTerm, setSearchTerm] = useState('');
    const typingTimeoutRef = useRef(null);

    function handleSearchTearchChange(e) {
        const value = e.target.value;
        setSearchTerm(e.target.value);
        if (onSubmit) {
            // truoc khi set timeout moi thi clear timeout cu
            if (typingTimeoutRef.current) {
                clearTimeout(typingTimeoutRef.current);
            }
            typingTimeoutRef.current = setTimeout(() => {

            }, 300);
            const formValues = {
                searchTerm: value,
            };
            onSubmit(formValues);
        }
    }
    return (
        <form>
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearchTearchChange}
            />
        </form>
    );
}

export default PostFiltersForm;