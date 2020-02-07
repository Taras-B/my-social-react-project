import React, { useState, useEffect } from 'react'

import style from './Paginator.module.css'

import {Button} from '@material-ui/core'


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
        
    return ( 
        <div className={style.paginator}>
            {portionNumber > 1 && <Button variant="contained" size="small" onClick={() => {setPortionNumber(portionNumber - 1)}}>Prev</Button>}
            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(p => {
                        return <span key={p}
                        className={currentPage === p ? style.selectedPage : "" + style.numbers}
                            onClick={() => {onPageChanged(p) }}>{p}</span>
            })}

            {portionCount > portionNumber && <Button variant="contained" size="small" onClick={() => setPortionNumber(portionNumber + 1)}
                        >Next</Button>}
             
        </div>

    )
}

export default Paginator
