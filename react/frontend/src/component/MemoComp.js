import React from 'react'

function MemoComp() {
    console.log('I am from Memo Component');
    return (
        <div>
            Memo Component
        </div>
    )
}
export default React.memo(MemoComp);