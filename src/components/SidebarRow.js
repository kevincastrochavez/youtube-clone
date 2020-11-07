import React from 'react'

function SidebarRow({ Icon, title, selected}) {
    return (
        <div className={`sidebarRow ${selected && 'selected'}`}>
            <Icon className='sidebarRow__icon' />
            <h1 className='sidebarRow__title'>{title}</h1>
        </div>
    )
}

export default SidebarRow
