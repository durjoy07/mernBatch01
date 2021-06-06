import React from 'react'
import ColumnComp from './ColumnComp'

function TableComp() {
    return (
        <table>
            <tbody>
                <tr>
                 <ColumnComp />
                </tr>
            </tbody>
        </table>
    )
}

export default TableComp;