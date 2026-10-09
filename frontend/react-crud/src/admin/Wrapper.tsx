import React, { PropsWithChildren } from 'react';
import Nav from '../components/Nav';
import Menu from '../components/Menu';
const Wrapper = (props: PropsWithChildren<any>) => {
    return (
        <div>
            <div className="container-fluid">
                <Nav />
                <div className="row">
                    <aside className="sidebar col-md-3 col-lg-2 bg-body-tertiary border-end min-vh-100">
                        <Menu />
                    </aside>
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-4">
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                            <h1 className="h2">Dashboard</h1>
                        </div>
                        <div className="row g-4 mb-4">
                            {props.children}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}
export default Wrapper;