import React, { createContext, useState, useContext, useEffect } from 'react';
import SettingsService from '../services/settings.service';

const SettingsContext = createContext<any>(null);

export const SettingsProvider = ({ children }: { children: React.ReactNode }) => {
    const [setting, setSetting] = useState({
        privacy_policy: '',
        terms_use: '',
        company_name: '',
        company_website: '',
    });

    // Fetch initial settings
    useEffect(() => {
        SettingsService.collect_settings()
            .then((response) => setSetting(response.data))
            .catch((error) => console.error('Error fetching settings:', error));
    }, []);

    return (
        <SettingsContext.Provider value={{ setting, setSetting }}>
            {children}
        </SettingsContext.Provider>
    );
};

export const useSettings = () => {
    const context = useContext(SettingsContext);
    if (!context) {
        throw new Error('useSettings must be used within a SettingsProvider');
    }
    return context;
};