import React from 'react'
import Link from '@docusaurus/Link';

import styles from './styles.module.css'

const Realms = {
    Client: 1 << 0,
    Server: 1 << 1,
    Menu: 1 << 2
}

function Realm({realm}) {
    const has_flag = flag => (realm & flag) === flag
    var classes = [styles.realm]

    if (has_flag(Realm.Client))
        classes.push('realm-client')

    if (has_flag(Realm.Server))
        classes.push('realm-server')

    if (has_flag(Realm.Menu))
        classes.push('realm-menu')

    return <a className={classes.join(' ')} href="https://wiki.facepunch.com/gmod/States" title="Realm"></a>
}

Realm.Client = 1 << 0,
Realm.Server = 1 << 1,
Realm.Menu = 1 << 2
Realm.defaultProps = {
    realm: Realm.Server
}

function Type({type, link}) {
    if (!link) {
        link = 'https://wiki.facepunch.com/gmod/' + type
    }

    return <a href={link}>{type}</a>
}

Type.defaultProps = {
    type: 'any'
}

function LinkType({type, link}) {
    return <Link to={link}>{type}</Link>
}

function Function({children, realm}) {
    return <div className={styles.functionContainer}>
        <div className={styles.functionContent}>
            <Realm realm={realm} /> {children}
        </div>
    </div>
}

export {
    Function,
    Realm,
    Realms,
    Type,
    LinkType
}