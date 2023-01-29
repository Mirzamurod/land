import { useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap'

const TabsLand = ({ land }) => {
    const [key, setKey] = useState('home')

    return (
        <Tabs id='tab' activeKey={key} onSelect={k => setKey(k)} className='mb-3'>
            <Tab eventKey='home' title='Home'>
                <div dangerouslySetInnerHTML={{ __html: land.desc }} />
            </Tab>
            <Tab eventKey='profile' title='Profile'>
                World
            </Tab>
        </Tabs>
    )
}

export default TabsLand
