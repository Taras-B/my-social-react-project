import React, { useState, useEffect } from 'react'

import style from './Paginator.module.css'
// import userPhoto from '../../assets/ava-img.jpg'
// import { NavLink } from 'react-router-dom';
// import * as axios from 'axios';
// import { userAPI } from '../../api/api';

const Paginator = ({currentPage, totalItemsCount, pageSize, onPageChanged, portionSize = 10, ...props}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    
    let [portionNumber, setPortionNumber] = useState(1)
    let portionCount = Math.ceil(pagesCount / portionSize)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize

    useEffect(() => {
        onPageChanged(leftPortionPageNumber)
    }, [leftPortionPageNumber, onPageChanged]); 
    
    
//     let nextButtonClick = () => { let LNumber = leftPortionPageNumber
//         setPortionNumber(portionNumber + 1)
//         onPageChanged(LNumber)
// }
// const memoizedCallback = useCallback(() => {
//    return onPageChanged(leftPortionPageNumber)
    
//   }, [leftPortionPageNumber, onPageChanged]);

//     useEffect(() => {
//         // onPageChanged(leftPortionPageNumber)
//         memoizedCallback()
//     }, [memoizedCallback]);  
    
    return ( 
        <div>
            {portionNumber > 1 && <button onClick={() => {setPortionNumber(portionNumber - 1)}}>Prev</button>}
            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(p => {
                        return <span key={p}
                        className={currentPage === p ? style.selectedPage : ""}
                            onClick={() => {onPageChanged(p) }}>{p}</span>
            })}

            {portionCount > portionNumber && <button onClick={() => setPortionNumber(portionNumber + 1)}
                        >Next</button>}
             
        </div>

    )
}

export default Paginator
