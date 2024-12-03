/**
 * BBBEasy open source platform - https://riadvice.tn/
 *
 * Copyright (c) 2022-2023 RIADVICE SUARL and by respective authors (see below).
 *
 * This program is free software; you can redistribute it and/or modify it under the
 * terms of the GNU Affero General Public License as published by the Free Software
 * Foundation; either version 3.0 of the License, or (at your option) any later
 * version.
 *
 * BBBeasy is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A
 * PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License along
 * with BBBEasy; if not, see <http://www.gnu.org/licenses/>.
 */

import React, { useState, useEffect }from 'react';
import { Button, Layout, Typography } from 'antd';
import { Trans, withTranslation } from 'react-i18next';
import SettingsService from "../../services/settings.service";

const { Footer } = Layout;
const { Text } = Typography;

const AppFooter = () => {
    const [privacyLink, setPrivacyLink] = useState('');
    const [termLink, setTermLink] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [companyUrl, setCompanyUrl] = useState('');

    useEffect(() => {
        SettingsService.collect_settings()
            .then((response) => {
                setPrivacyLink(response.data.privacy_policy)
                setTermLink(response.data.terms_use)
                setCompanyUrl(response.data.company_website)
                setCompanyName(response.data.company_name)
        })
            .catch(error => console.error('Error fetching privacy link:', error));
    }, []);
    return (
        <Footer className="site-footer">
            <Text type="secondary">
                ©2022 <Button type="link" href={companyUrl}>{companyName}</Button> <Trans i18nKey="reserved-rights" />
            </Text>
            <Text type="secondary">
                <a href={termLink} target="_blank" rel="noreferrer"><Trans
                    i18nKey="term"/> & <Trans i18nKey="conditions"/> </a>|
                <a href={privacyLink} target="_blank" rel="noreferrer"><Trans i18nKey="privacy-policy" /></a>
            </Text>
        </Footer>
    );
};

export default withTranslation()(AppFooter);
