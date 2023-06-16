import React from 'react'
import { useTranslation } from 'react-i18next'

function About() {
    const { t } = useTranslation()

    return (
    <div className='container' style={{padding: "3vw 14px"}}>
        <h3>{t('about us')}</h3>
        <p>{t('about us t')}</p>
        <br />
        <h3>NewStore orqali nimalarni topish mumkin?</h3>
        <p>
            Saytda deyarli hamma narsa bor. 30 mingdan ortiq sotuvchi 6 milliondan ortiq mahsulot turlarini taklif etadi va assortiment kun sayin yanada kengayib bormoqda. Mahsulotlarni Xitoydan olish mumkin, shuningdek, mahalliy ishbilarmonlarning takliflari ham mavjud. Savdo maydonchasida siz quyidagilarni topasiz:
            <ul>
                <li>
                hamyonbop va taniqli brendlardan smartfonlar va boshqa elektronika;
                </li>
                <li>
                ayollar, erkaklar va bolalarning kiyim-kechaklari;
                </li>
                <li>
                avtomobillar va mototexnika uchun ehtiyot qismlar va aksessuarlar;
                </li>
                <li>
                kompyuter uchun qismlar;
                </li>
                <li>
                uylarni ta'mirlash va jihozlash uchun barcha mahsulotlar;
                </li>
                <li>
                bolalar uchun mahsulotlar;
                </li>
                <li>
                turli xil maishiy texnika;
                </li>
                <li>
                aksessuarlar;
                </li>
                <li>
                qo'lda ishlatiladigan va elektr asboblar;
                </li>
                <li>
                barcha fasllar uchun poyabzal;
                </li>
            </ul>
            <p>
Bundan tashqari, NewStore maydonchasida siz:
            </p>
            <ul>
                <li>
                    Xiaomi;
                </li>
                <li>
                    Bosch;
                </li>
                <li>
                    Artel;
                </li>
                <li>
                    Nokia;
                </li>
                <li>
                    Blackview;
                </li>
                <li>
                    Apple;
                </li>
                <li>
                    Samsung;
                </li>
                <li>
                    Huawei va b.
                </li>
            </ul>
            <p>
            Ilova yoki veb-saytni ochar ekansiz, Xitoy va Ipak yo'li mamlakatlarini o'z ichiga olgan eng yirik bozorga tashrif buyurgan bo'lasiz.
            </p>
        </p>
        <br />
        <h3>Nafaqat xarid olish, balki sotish imkoni ham</h3>
        <p>NewStore maydonchasi ishga tushirilgan mamlakatlardagi mahalliy sotuvchilar, savdo maydonchasi imkoniyatlaridan foydalanish orqali, o'zlarining B2C e-commerce bizneslarini yo'lga qo'yishlari mumkin. O'z mahsulotlaringizni hamda ularning sifatli tavsifi va fotosuratlarini joylashtirish orqali, mahsulotlaringizni 225 milliondan ortiq mijozlar e'tiboriga havola qilish imkonini qo'lga kiritasiz. Mahsulot tavsiflari avtomatik ravishda 8 tilga tarjima qilinadi. Servis komissiyasi 2 dan 15% gachani tashkil etadi. Shuningdak, har doim qo'llab-quvvatlash xizmati ta'minlanadi.</p>
    </div>
    )
}

export default About