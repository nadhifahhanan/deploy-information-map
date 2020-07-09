import React, { Component } from 'react'
import { Menu, Segment, Sticky } from 'semantic-ui-react'
import logo from '../assets/image/ui.jpg'

export default class Navbar extends Component {
    state = { activeItem: 'Tentang UI' }


    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Sticky>
                <Segment inverted>
                    <Menu inverted pointing secondary>
                        <Menu.Item className="logo">
                            <img src={logo} />
                        </Menu.Item>
                        <Menu.Item
                            name='Beranda'
                            active={activeItem === 'Beranda'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='Tentang UI'
                            active={activeItem === 'Tentang UI'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='Penelitian &amp; Inovasi'
                            active={activeItem === 'Penelitian & Inovasi'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='Akademik'
                            active={activeItem === 'Akademik'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='Penerimaan'
                            active={activeItem === 'Penerimaan'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='Mahasiswa'
                            active={activeItem === 'Mahasiswa'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='Hubungi Kami'
                            active={activeItem === 'Hubungi Kami'}
                            onClick={this.handleItemClick}
                        />
                    </Menu>
                </Segment>
            </Sticky>
        )
    }
}