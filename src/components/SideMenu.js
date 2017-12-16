import React from 'react';
import '../styles/css/side_menu.css';

export default class SideMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isClicked: false
        };
    }

    toggleClicked = (item, number) => {
        this.props.callbackFromParent(item, number);
        // console.log(item);
    }
    render() {
        const menus = ['han', 'li', 'mongolian', 'contemporary', 'uyhgur', 'tibetan'];
        const listItems = menus.map((menu) => <li><a onClick={() => {this.toggleClicked(menu, menus.indexOf(menu))}} ><div className='side-menu-item'>{menu}</div></a></li>)
        return (
            <div className="menu-container">
                <ul className='side-menu-bar'>
                    {listItems}
                </ul>
            </div>
        )
    }
}
