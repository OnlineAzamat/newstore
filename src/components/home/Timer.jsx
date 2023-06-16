import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { useTimer } from 'react-timer-hook';

function Timer({ expiryTimestamp }) {
    const { t } = useTranslation()

    const {
        seconds,
        minutes,
        hours,
        days
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

    return (
        <div className="timer timer-big">
            <div className="timer__item">
                {days}
                <span>{t('days')}</span>
            </div>
            <div className="timer__item">
                {hours}
                <span>{t('hours')}</span>
            </div>
            <div className="timer__item">
                {minutes}
                <span>{t('minutes')}</span>
            </div>
            <div className="timer__item">
                {seconds}
                <span>{t('seconds')}</span>
            </div>
        </div>
    )
}

export default Timer