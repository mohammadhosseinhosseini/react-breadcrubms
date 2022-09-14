import { useEffect, useState } from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

function App() {
    const [breadcrumbs, setBreadcrubms] = useState([])
    useEffect(() => {
        // Fetch API here ->
        setBreadcrubms([
            {
                name: 'some-page-1',
                link: '/some/path/1',
                title: 'Link title for page 1',
                label: 'Some page 1',
            },
            {
                name: 'some-page-1',
                link: '/some/path/2',
                title: 'Link title for page 1',
                label: 'Some page 2',
            },
        ])
    }, [])

    return (
        <div className='container mt-5'>
            {breadcrumbs.length > 0 && (
                <Breadcrumb>
                    <Breadcrumb.Item
                        href='example.com' // Home page link
                    >
                        Home
                    </Breadcrumb.Item>
                    {breadcrumbs.map((b, index) => (
                        <Breadcrumb.Item
                            key={index}
                            href={b.link}
                            active={index + 1 == breadcrumbs.length}
                        >
                            {b.label}
                        </Breadcrumb.Item>
                    ))}
                </Breadcrumb>
            )}
        </div>
    )
}

export default App
