import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';

export default function NavBar() {

    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src="/assets/YouJelly.png"/>
                    YouJelly
                </Menu.Item>
                <Menu.Item name="Videos" />
                <Menu.Item>
                    <Button positive content='Upload Video'/>
                </Menu.Item>
            </Container>
        </Menu>
    )
}