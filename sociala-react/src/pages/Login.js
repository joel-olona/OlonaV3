import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../components/LanguageSwitcher';

const Login = () => {
    const { t } = useTranslation();
    return (
            <Fragment> 
                <div className="main-wrap">
                    <div className="nav-header bg-transparent shadow-none border-0">
                        <div className="nav-top w-100">
                            <Link to="/">
                                <img src="assets/images/logo-olona-talents-black600x200.png" alt="logo" className="d-inline-block" style={{height: '45px'}} />
                            </Link>
                            <button className="nav-menu me-0 ms-auto"></button>
                            <div className="ms-auto d-flex align-items-center">
                                <LanguageSwitcher />
                                <Link to="/login" className="header-btn d-none d-lg-block bg-dark fw-500 text-white font-xsss p-3 ms-3 w100 text-center lh-20 rounded-xl">{t('login.loginBtn')}</Link>
                                <Link to="/register" className="header-btn d-none d-lg-block bg-current fw-500 text-white font-xsss p-3 ms-2 w100 text-center lh-20 rounded-xl">{t('login.register')}</Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div 
                            className="col-xl-5 d-none d-xl-block p-0 vh-100 bg-image-cover bg-no-repeat"
                            style={{backgroundImage: `url("assets/images/login-bg.jpg")`}}
                        ></div>
                        <div className="col-xl-7 vh-100 align-items-center d-flex bg-white rounded-3 overflow-hidden">
                            <div className="card shadow-none border-0 ms-auto me-auto login-card">
                                <div className="card-body rounded-0 text-left">
                                        <h2 className="fw-700 display1-size display2-md-size mb-3">{t('login.title')}</h2>
                                    <form onSubmit={(e) => {
                                        e.preventDefault();
                                        window.location.href = '/home';
                                    }}>
                                        <div className="form-group icon-input mb-3">
                                            <i className="font-sm ti-email text-grey-500 pe-0"></i>
                                            <input type="text" className="style2-input ps-5 form-control text-grey-900 font-xsss fw-600" placeholder={t('login.email')} required />                        
                                        </div>
                                        <div className="form-group icon-input mb-1">
                                            <input type="password" className="style2-input ps-5 form-control text-grey-900 font-xss ls-3" placeholder={t('login.password')} required />
                                            <i className="font-sm ti-lock text-grey-500 pe-0"></i>
                                        </div>
                                        <div className="form-check text-left mb-3">
                                            <input type="checkbox" className="form-check-input mt-2" id="exampleCheck5" />
                                                <label className="form-check-label font-xsss text-grey-500">{t('login.remember')}</label>
                                                <Link to="/forgot" className="fw-600 font-xsss text-grey-700 mt-1 float-right">{t('login.forgot')}</Link>
                                        </div>
                                        <div className="col-sm-12 p-0 text-left">
                                            <div className="form-group mb-1">
                                                    <button type="submit" className="form-control text-center style2-input text-white fw-600 bg-dark border-0 p-0">{t('login.loginBtn')}</button>
                                                </div>
                                                <h6 className="text-grey-500 font-xsss fw-500 mt-0 mb-0 lh-32">{t('login.noAccount')} <Link to="/register" className="fw-700 ms-1">{t('login.register')}</Link></h6>
                                        </div>
                                    </form>
                                    <div className="col-sm-12 p-0 text-center mt-2">
                                            <h6 className="mb-0 d-inline-block bg-white fw-500 font-xsss text-grey-500 mb-3">{t('login.or')}</h6>
                                        <div className="form-group mb-1">
                                            <button onClick={() => window.location.href = '/home'} className="form-control text-left style2-input text-white fw-600 bg-facebook border-0 p-0 mb-2">
                                                    <img src="assets/images/icon-1.png" alt="icon" className="ms-2 w40 mb-1 me-5" /> {t('login.google')}
                                            </button>
                                        </div>
                                        <div className="form-group mb-1">
                                            <button onClick={() => window.location.href = '/home'} className="form-control text-left style2-input text-white fw-600 bg-twiiter border-0 p-0">
                                                    <img src="assets/images/icon-3.png" alt="icon" className="ms-2 w40 mb-1 me-5" /> {t('login.facebook')}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
};

export default Login;
