import './App.css'
import MainMenu from './bur-gui-framework/main-menu/main-menu'
import imgBrand from './logo.svg'
import TopMenu from './bur-gui-framework/top-menu/top-menu'
import Btn from './bur-gui-framework/btn/btn'
import Tag from './bur-gui-framework/tag/tag'
import Card from './bur-gui-framework/card/card'
import CardFooter from './bur-gui-framework/card/card-footer'
import DataTable from './bur-gui-framework/data-table/data-table'
import DataInput from './bur-gui-framework/data-input/data-input'
import DataToggle from './bur-gui-framework/data-toggle/data-toggle'
import Menu from './bur-gui-framework/menu/menu'
import DropDownMenu from './bur-gui-framework/menu/drop-down-menu'
import React from 'react'
import DropDownPlaceholder from './bur-gui-framework/menu/drop-down-placeholder'

function App() {
    return (
        <div className="main">
            <MainMenu
                brand={{ src: imgBrand, url: '../' }}
                items={[
                    { src: imgBrand, url: '/', title: 'Один', exact: true },
                    { type: 'divider' },
                    {
                        src: imgBrand,
                        url: '/one',
                        title: 'Два',
                        exact: false,
                    },
                ]}
                itemsBottom={[
                    {
                        src: imgBrand,
                        url: '/three',
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
                    itemsRight={[
                        {
                            component: (
                                <DropDownPlaceholder
                                    align={'right'}
                                    dropDownWidth={400}
                                    buttonComponent={
                                        <Btn
                                            type={'primary'}
                                            title={'user'}
                                            outline={true}
                                        >
                                            <span
                                                className={'dropdown_arrow'}
                                            />
                                        </Btn>
                                    }
                                >
                                    <Card title={'sing in'}>
                                        <DataInput
                                            label={'login'}
                                            value={''}
                                            required={true}
                                            placeholder={'Введите логин'}
                                        />
                                        <DataInput
                                            label={'password'}
                                            type={'password'}
                                        />
                                        <DataToggle
                                            label={'Remember'}
                                            value={false}
                                        />
                                        <CardFooter>
                                            <Btn
                                                title={'Login'}
                                                type={'primary'}
                                                outline={true}
                                            />
                                            <Btn
                                                title={'Cancel'}
                                                type={'danger'}
                                            />
                                        </CardFooter>
                                    </Card>
                                </DropDownPlaceholder>
                            ),
                        },
                    ]}
                />
                <div className={'content-layout'}>
                    <DropDownMenu
                        menuItems={[{ title: 'Меню 1' }, { title: 'Меню 2' }]}
                        dropDownWidth={500}
                    >
                        <Btn type={'primary'} title={'user'} outline={true}>
                            <span className={'dropdown_arrow'} />
                        </Btn>
                    </DropDownMenu>

                    <Menu
                        style={{ width: 600 }}
                        items={[
                            { title: 'Меню 1', url: './sub1', disabled: false },
                            { title: 'Меню 2', url: './sub2', active: true },
                            {
                                title: 'Меню 2.5',
                                onClick: (item) => {
                                    console.log(item)
                                },
                            },
                            { title: 'Меню 3', url: './sub3', disabled: true },
                            {
                                title: (
                                    <div style={{ width: 400 }}>
                                        some text
                                        <Btn title={'btn'} type={'danger'} />
                                    </div>
                                ),
                                url: './sub4',
                                disabled: false,
                            },
                        ]}
                    />

                    <Card title={'Some title'}>
                        <DataInput
                            label={'login'}
                            value={''}
                            required={true}
                            placeholder={'Введите логин'}
                        />
                        <DataInput label={'password'} type={'password'} />
                        <DataInput
                            label={'password'}
                            type={'email'}
                            hint={'Подсказочка'}
                        />
                        <DataInput label={'password'} type={'number'} />
                        <DataToggle label={'toggle'} value={false} />
                        <DataToggle label={'toggle2'} value={true} />
                        <DataToggle
                            label={'toggle3'}
                            value={false}
                            disabled={true}
                        />
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

                    <Btn
                        title={'primary'}
                        block={false}
                        type={'primary'}
                        outline={false}
                    >
                        <DataToggle label={'toggle'} value={false} />
                    </Btn>
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
                        title={'none'}
                        block={false}
                        type={'none'}
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
                    <Tag title={'none'} type={'none'} />

                    <DataTable
                        columnClickCallback={(column) => {
                            alert(JSON.stringify(column))
                        }}
                        rowStyleCallback={(row) => {
                            if (row.superuser) {
                                return {
                                    backgroundColor: '#e1fcb3',
                                }
                            }
                            return {}
                        }}
                        columns={[
                            {
                                fieldName: 'login',
                                width: 30 + '%',
                                title: 'Логин',
                            },
                            {
                                fieldName: 'name',
                                width: 30 + '%',
                                title: 'Пользователь',
                                align: 'left',
                            },
                            {
                                fieldName: 'active',
                                width: 20 + '%',
                                title: 'Активность',
                                renderCallback: (fieldName, value) => {
                                    return (
                                        <Tag
                                            style={{
                                                width: 100,
                                                margin: 'auto',
                                            }}
                                            title={value ? 'Вкл' : 'Выкл'}
                                            type={value ? 'success' : 'danger'}
                                        />
                                    )
                                },
                            },
                            {
                                fieldName: 'superuser',
                                width: 20 + '%',
                                title: 'Администратор',
                                renderCallback: (fieldName, value) => {
                                    return (
                                        <DataToggle
                                            align={'center'}
                                            value={value}
                                            readonly={true}
                                        />
                                    )
                                },
                            },
                        ]}
                        data={[
                            {
                                login: 'foxjr',
                                name: 'Dmitry',
                                active: true,
                                superuser: false,
                            },
                            {
                                login: 'foxjr',
                                name: 'Dmitry',
                                active: true,
                                superuser: true,
                            },
                            {
                                login: 'foxjr',
                                name: 'Dmitry',
                                active: true,
                                superuser: false,
                            },
                            {
                                login: 'foxjr',
                                name: 'Dmitry',
                                active: true,
                                superuser: false,
                            },
                            {
                                login: 'foxjr',
                                name: 'Dmitry',
                                active: false,
                                superuser: false,
                            },
                            {
                                login: 'foxjr',
                                name: 'Dmitry',
                                active: true,
                                superuser: false,
                            },
                            {
                                login: 'foxjr',
                                name: 'Dmitry',
                                active: true,
                                superuser: false,
                            },
                            {
                                login: 'foxjr',
                                name: 'Dmitry',
                                active: true,
                                superuser: true,
                            },
                            {
                                login: 'foxjr',
                                name: 'Dmitry',
                                active: true,
                                superuser: false,
                            },
                            {
                                login: 'foxjr',
                                name: 'Dmitry',
                                active: false,
                                superuser: false,
                            },
                            {
                                login: 'foxjr',
                                name: 'Dmitry',
                                active: true,
                                superuser: false,
                            },
                            {
                                login: 'foxjr',
                                name: 'Dmitry',
                                active: true,
                                superuser: false,
                            },
                            {
                                login: 'foxjr',
                                name: 'Dmitry',
                                active: true,
                                superuser: false,
                            },
                            {
                                login: 'foxjr',
                                name: 'Dmitry',
                                active: false,
                                superuser: true,
                            },
                            {
                                login: 'foxjr',
                                name: 'Dmitry',
                                active: true,
                                superuser: false,
                            },
                            {
                                login: 'foxjr',
                                name: 'Dmitry',
                                active: false,
                                superuser: false,
                            },
                            {
                                login: 'foxjr',
                                name: 'Dmitry',
                                active: true,
                                superuser: false,
                            },
                            {
                                login: 'foxjr',
                                name: 'Dmitry',
                                active: true,
                                superuser: true,
                            },
                            {
                                login: 'foxjr',
                                name: 'Dmitry',
                                active: true,
                                superuser: false,
                            },
                            {
                                login: 'foxjr',
                                name: 'Dmitry',
                                active: false,
                                superuser: false,
                            },
                            {
                                login: 'foxjr',
                                name: 'Dmitry',
                                active: true,
                                superuser: false,
                            },
                            {
                                login: 'foxjr',
                                name: 'Dmitry',
                                active: false,
                                superuser: false,
                            },
                            {
                                login: 'foxjr',
                                name: 'Dmitry',
                                active: true,
                                superuser: false,
                            },
                            {
                                login: 'foxjr',
                                name: 'Dmitry',
                                active: true,
                                superuser: false,
                            },
                            {
                                login: 'foxjr',
                                name: 'Dmitry',
                                active: true,
                                superuser: false,
                            },
                        ]}
                    />
                </div>
            </div>
        </div>
    )
}

export default App
