import './App.css'
import MainMenu from './skin-frame/main-menu'
import imgBrand from './logo.svg'
import TopMenu from './skin-frame/top-menu'

function App() {
    return (
        <div className="main">
            <MainMenu
                brand={{ src: imgBrand, url: '../' }}
                items={[
                    { src: imgBrand, url: '../', title: 'Один', exact: true },
                    { type: 'divider' },
                    { src: imgBrand, url: '../one', title: 'Два', exact: true },
                ]}
                itemsBottom={[
                    {
                        src: imgBrand,
                        url: '../three',
                        title: 'Три',
                        exact: true,
                    },
                    { type: 'label', title: 'Ver.1.0' },
                ]}
            />
            <div className={'main-content'}>
                <TopMenu
                    items={[
                        { title: 'One', url: '../', exact: true },
                        { title: 'Two', url: '../one/two', exact: true },
                        { title: 'Three', url: '../one/three', exact: true },
                    ]}
                    itemsRight={[{ component: <button>some</button> }]}
                />
            </div>
        </div>
    )
}

export default App
