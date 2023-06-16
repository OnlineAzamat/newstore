import React from 'react'
import { useTranslation } from 'react-i18next'

function Contact() {
    const { t } = useTranslation()
    return (
        <div className='contact'>
            <div className="container text-center pt-5">
                <h3>{t('contact')}</h3>
                <div className="d-flex flex-column align-items-center pt-4">
                    <div className="d-flex gap-2 pb-2 pt-2">
                        <div className="icon">
                            <div className="bi bi-instagram"></div>
                        </div>
                        <div className="social">
                            <p>Instagram: @exampleInstagram</p>
                        </div>
                    </div>
                    <div className="d-flex gap-2 pb-2 pt-2">
                        <div className="icon">
                            <div className="bi bi-facebook"></div>
                        </div>
                        <div className="social">
                            <p>Facebook: @exampleFacebook</p>
                        </div>
                    </div>
                    <div className="d-flex gap-2 pb-2 pt-2">
                        <div className="icon">
                            <div className="bi bi-linkedin"></div>
                        </div>
                        <div className="social">
                            <p>Linkedin: @exampleLinkedin</p>
                        </div>
                    </div>
                    <div className="d-flex gap-2 pb-2 pt-2">
                        <div className="icon">
                            <div className="bi bi-phone"></div>
                        </div>
                        <div className="social">
                            <p>Phone: +99800 000-00-00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact