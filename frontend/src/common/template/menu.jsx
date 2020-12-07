import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'


export default props => {
    return (
        <div>
            <ul className='sidebar-menu'>
                <MenuItem path="/" icon="dashboard" label="Dashboard" />
                <MenuTree icon="edit" label="Cadastro">
                    <MenuItem path="billingCycles" icon="usd" label=" Ciclos de Pagamentos" />
                </MenuTree>                
            </ul>
        </div>
    )
}