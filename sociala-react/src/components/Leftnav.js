import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Leftnav = () => {
    const { t } = useTranslation();

    return (
        <div className="navigation scroll-bar">
            <div className="container ps-0 pe-0">
                <div className="nav-content">
                    <div className="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1 mb-2 mt-2">
                        <div className="nav-caption fw-600 font-xssss text-grey-500"><span>New </span>Feeds</div>
                        <ul className="mb-1 top-content">
                            <li className="logo d-none d-xl-block d-lg-block"></li>
                            <li><Link to="/home" className="nav-content-bttn open-font"><i className="feather-tv btn-round-md bg-blue-gradiant me-3"></i><span>{t('nav.newsfeed')}</span></Link></li>
                            <li><Link to="/defaultbadge" className="nav-content-bttn open-font"><i className="feather-award btn-round-md bg-red-gradiant me-3"></i><span>{t('nav.badges')}</span></Link></li>
                            <li><Link to="/defaultstorie" className="nav-content-bttn open-font"><i className="feather-globe btn-round-md bg-gold-gradiant me-3"></i><span>{t('nav.explore')}</span></Link></li>
                            <li><Link to="/defaultgroup" className="nav-content-bttn open-font"><i className="feather-zap btn-round-md bg-mini-gradiant me-3"></i><span>{t('nav.popular')}</span></Link></li>
                            <li><Link to="/userpage" className="nav-content-bttn open-font"><i className="feather-user btn-round-md bg-primary-gradiant me-3"></i><span>{t('nav.profile')}</span></Link></li>                        
                        </ul>
                    </div>

                    <div className="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1 mb-2">
                        <div className="nav-caption fw-600 font-xssss text-grey-500"><span>More </span>Pages</div>
                        <ul className="mb-3">
                            <li><Link to="/defaultemailbox" className="nav-content-bttn open-font"><i className="font-xl text-current feather-inbox me-3"></i><span>{t('nav.email')}</span><span className="circle-count bg-warning mt-1">584</span></Link></li>
                            <li><Link to="/defaulthotel" className="nav-content-bttn open-font"><i className="font-xl text-current feather-home me-3"></i><span>{t('nav.hotels')}</span></Link></li>
                            <li><Link to="/defaultevent" className="nav-content-bttn open-font"><i className="font-xl text-current feather-map-pin me-3"></i><span>{t('nav.events')}</span></Link></li>
                            <li><Link to="/defaultlive" className="nav-content-bttn open-font"><i className="font-xl text-current feather-youtube me-3"></i><span>{t('nav.live')}</span></Link></li>                        
                        </ul>
                    </div>

                    <div className="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1">
                        <div className="nav-caption fw-600 font-xssss text-grey-500"><span></span> Account</div>
                        <ul className="mb-1">
                            <li className="logo d-none d-xl-block d-lg-block"></li>
                            <li><Link to="/defaultsettings" className="nav-content-bttn open-font h-auto pt-2 pb-2"><i className="font-sm feather-settings me-3 text-grey-500"></i><span>{t('nav.settings')}</span></Link></li>
                            <li><Link to="/defaultanalytics" className="nav-content-bttn open-font h-auto pt-2 pb-2"><i className="font-sm feather-pie-chart me-3 text-grey-500"></i><span>{t('nav.analytics')}</span></Link></li>
                            <li><Link to="/defaultmessage" className="nav-content-bttn open-font h-auto pt-2 pb-2"><i className="font-sm feather-message-square me-3 text-grey-500"></i><span>{t('nav.chat')}</span><span className="circle-count bg-warning mt-0">23</span></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Leftnav;
