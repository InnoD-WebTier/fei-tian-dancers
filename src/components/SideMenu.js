import React from 'react';
import '../styles/css/side_menu.css';

export default class SideMenu extends React.Component {
    render() {
        const menus = [
            ['han', 'http://example.com/'],
            ['dai', 'http://example.com/'],
            ['tibetan', 'http://example.com/'],
            ['miao', 'http://example.com/'],
            ['li', 'http://example.com/'],
            ['contemporary', 'http://example.com/'],
            ['mongolian', 'http://example.com/'],
            ['uyghur', 'http://example.com/'],
            ['small & solo dances', 'http://example.com/']
        ]
        const listItems = menus.map((menu) => <li><a href={menu[1]}><div className='side-menu-item'>{menu[0]}</div></a></li>)
        return(
            <div className='menu-container'>
                <ul className='side-menu-bar'>
                    {listItems}
                </ul>
            </div>
        )
    }
}
