import './App.css'
import MainMenu from './skin-frame/main-menu/main-menu'
import imgBrand from './logo.svg'
import TopMenu from './skin-frame/top-menu/top-menu'
import Btn from './skin-frame/btn/btn'
import Tag from './skin-frame/tag/tag'
import Card from './skin-frame/card/card'
import CardFooter from './skin-frame/card/card-footer'

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
                <div className={'content-layout'}>
                    <Btn
                        title={'primary'}
                        block={false}
                        type={'primary'}
                        outline={false}
                    />
                    <Btn
                        title={'secondary'}
                        block={false}
                        type={'secondary'}
                        outline={false}
                    />
                    <Btn
                        title={'success'}
                        block={false}
                        type={'success'}
                        outline={false}
                    />
                    <Btn
                        title={'warning'}
                        block={false}
                        type={'warning'}
                        outline={false}
                    />
                    <Btn
                        title={'danger'}
                        block={false}
                        type={'danger'}
                        outline={false}
                    />
                    <Btn
                        title={'info'}
                        block={false}
                        type={'info'}
                        outline={false}
                    />

                    <Btn
                        title={'primary-block'}
                        block={true}
                        type={'primary'}
                        outline={false}
                    />
                    <Btn
                        title={'secondary-block'}
                        block={true}
                        type={'secondary'}
                        outline={false}
                    />
                    <Btn
                        title={'success-block'}
                        block={true}
                        type={'success'}
                        outline={false}
                    />
                    <Btn
                        title={'warning-block'}
                        block={true}
                        type={'warning'}
                        outline={false}
                    />
                    <Btn
                        title={'danger-block'}
                        block={true}
                        type={'danger'}
                        outline={false}
                    />

                    <Btn
                        title={'info-block'}
                        block={true}
                        type={'info'}
                        outline={false}
                    />

                    <Btn
                        title={'primary-outline'}
                        block={false}
                        type={'primary'}
                        outline={true}
                    />
                    <Btn
                        title={'secondary-outline'}
                        block={false}
                        type={'secondary'}
                        outline={true}
                    />
                    <Btn
                        title={'success-outline'}
                        block={false}
                        type={'success'}
                        outline={true}
                    />
                    <Btn
                        title={'warning-outline'}
                        block={false}
                        type={'warning'}
                        outline={true}
                    />
                    <Btn
                        title={'danger-outline'}
                        block={false}
                        type={'danger'}
                        outline={true}
                    />
                    <Btn
                        title={'info-outline'}
                        block={false}
                        type={'info'}
                        outline={true}
                    />
                    <Btn
                        title={'icon-outline'}
                        block={false}
                        type={'primary'}
                        img={imgBrand}
                        outline={true}
                    />
                    <Btn
                        title={'icon-outline'}
                        block={false}
                        type={'primary'}
                        img={imgBrand}
                        outline={true}
                        onlyIcon={true}
                    />
                    <Btn
                        title={'Title 1 d d d dd d'}
                        block={false}
                        type={'primary'}
                        img={imgBrand}
                        outline={true}
                    />

                    <Tag title={'primary'} type={'primary'} />
                    <Tag title={'secondary'} type={'secondary'} />
                    <Tag title={'success'} type={'success'} />
                    <Tag title={'warning'} type={'warning'} />
                    <Tag title={'danger'} type={'danger'} />
                    <Tag title={'info'} type={'info'} />

                    <Card title={'Some title'}>
                        Some Text
                        <CardFooter>
                            <Btn
                                title={'info'}
                                type={'primary'}
                                outline={true}
                                callback={() => {
                                    alert(1)
                                }}
                            />
                            <Btn title={'warning'} type={'warning'} />
                            <Btn title={'danger'} type={'danger'} />
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default App
