import React from 'react';
import { useTranslation } from 'react-i18next';

const Profiledetail = () => {
    const { t } = useTranslation();

    return (
        <div className="card w-100 shadow-xss rounded-xxl border-0 mb-3">
            <div className="card-body d-block p-4">
                <h4 className="fw-700 mb-3 font-xsss text-grey-900">{t('profile.headings.about')}</h4>
                <p className="fw-500 text-grey-500 lh-24 font-xssss mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus</p>
            </div>
            <div className="card-body border-top-xs d-flex">
                <i className="feather-lock text-grey-500 me-3 font-lg"></i>
                <h4 className="fw-700 text-grey-900 font-xssss mt-0">{t('profile.privacy.private')} <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">{t('profile.privacy.privateDesc')}</span></h4>
            </div>

            <div className="card-body d-flex pt-0">
                <i className="feather-eye text-grey-500 me-3 font-lg"></i>
                <h4 className="fw-700 text-grey-900 font-xssss mt-0">{t('profile.privacy.visible')} <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">{t('profile.privacy.visibleDesc')}</span></h4>
            </div>
            <div className="card-body d-flex pt-0">
                <i className="feather-map-pin text-grey-500 me-3 font-lg"></i>
                <h4 className="fw-700 text-grey-900 font-xssss mt-1">Flodia, Austia </h4>
            </div>
            <div className="card-body d-flex pt-0">
                <i className="feather-users text-grey-500 me-3 font-lg"></i>
                <h4 className="fw-700 text-grey-900 font-xssss mt-1">Genarel Group</h4>
            </div>
        </div>
    );
};

export default Profiledetail;
