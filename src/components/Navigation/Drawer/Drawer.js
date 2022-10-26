import { Component, Fragment } from 'react'

import Backdrop from '../../UI/Backdrop/Backdrop'

import './Drawer.css'

const links = [
    1, 2, 3,
]


class Drawer extends Component {

    renderLinks() {
        return links.map((link, i) => {
            return (
                <li key={i}>
                    <a>Link {link}</a>
                </li>
            )
        })
    }

    render() {

        const cls = ['Drawer']

        if (!this.props.isOpen) {
            cls.push('Drawer close')
        }

        return (
            <Fragment>
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLinks()}
                    </ul>
                </nav>
                { this.props.isOpen ? <Backdrop onClick={this.props.onClose}/> : null }
            </Fragment>
           
        )
    }
}

export default Drawer