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

import React from 'react';
import { Button, Layout, Typography } from 'antd';
import { Trans, withTranslation } from 'react-i18next';
import {useSettings} from "../../lib/SettingsContext";

const { Footer } = Layout;
const { Text } = Typography;


const AppFooter = () => {
    const { setting } = useSettings();
    return (
        <Footer className="site-footer">
            <Text type="secondary">
                ©2022 <Button type="link" href={setting.company_website}>{setting.company_name}</Button> <Trans i18nKey="reserved-rights" />
            </Text>
            <Text type="secondary">
                <a href={setting.terms_use} target="_blank" rel="noreferrer"><Trans
                    i18nKey="term"/> & <Trans i18nKey="conditions"/> </a>|
                <a href={setting.privacy_policy} target="_blank" rel="noreferrer"><Trans i18nKey="privacy-policy" /></a>
            </Text>
        </Footer>
    );
};

export default withTranslation()(AppFooter);
