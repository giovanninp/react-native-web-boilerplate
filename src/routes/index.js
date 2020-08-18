import React from 'react';
import Navigation from '../components/Navigation';
import HomePage from '../pages/Home';
import AboutPage from '../pages/About';

import NavBar from '../components/NavBar';

const navigation = {
    screens: {
        Home: {
            Screen: HomePage,
        },
        About: {
            Screen: AboutPage
        }
    },
    initialScreenName: 'Home',
    type: 'stack',
}

export default function Routes() {
    return(
        <Navigation {...navigation} NavBar={NavBar} />
    )
};