import { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'

import Backdrop from '../../UI/Backdrop/Backdrop'

import './Drawer.css'

const links = [
    {to: '/', label: 'Список',},
    {to: '/auth', label: 'Авторизация',},
    {to: '/quiz-creator', label: 'Создать тест',},

]


class Drawer extends Component {

    clickClose = () => {
        this.props.onClose()
    }

    renderLinks() {
        return links.map((link, i) => {
            return (
                <li key={i}>
                    <NavLink to={link.to}
                             exact={toString(link.exact)}
                             onClick={this.clickClose}

                    >
                        {link.label}
                    </NavLink>
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