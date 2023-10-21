import React, { useState } from 'react';
import SingleClass from '../Pages/Classes/SingleClass';

const PaginationComponent = ({ data, itemsPerPage }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(data.length / itemsPerPage);

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    return (
        <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    currentItems.map((item, index) => (
                        <SingleClass key={index} singleClass={item} />
                    ))
                }
            </div>

            <div>
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                    Previous
                </button>
                <span>{currentPage} of {totalPages}</span>
                <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </div>
    );
}


export default PaginationComponent;
