import { Link } from "react-router-dom";
import { useState } from 'react'

function One() {
    const [money, setMoney] = useState('')
    const [milk, setMilk] = useState('')
    let mulo = 'У вас будет два выбора заработка 1.Вы будете получать 50% от продажи предметов с вашего аккаунта деньгами2.Все будет тоже самое но за исключением вы будете получать 50% V-баксами (не деньгами) Напишите нам через Telegram или WhatsApp'
    let mon = 'Предмет за 100V = 20 руб.'
    return (
        <div className="one">
            <section>
                <div class="intro">
                    <div class="video">
                        <video class="video-media" autoplay muted loop src=""></video>
                    </div>
                </div>
                <div class="welcome">
                    <div class="welcome-color">
                        <div class="container-2">
                            <div class="welcome-list">
                                <div class="welcome-link">
                                    <h2>FS store</h2>
                                    <h1>Добро пожаловать<br />в магазин предметов<br />Fortnite</h1>
                                    <p>Дешевые цены на скины<br />и предметы в Fortnite</p>
                                    <div class="welcome-reg">
                                        <button id="loh"><Link to='/two'>Зарегистрироваться</Link></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="bust">
                <div class="bust">
                    <div class="container2">
                        <div class="bust-list">
                            <h1>Прокачиваем<br />боевой пропуск</h1>
                            <p>1 уровень = 25 руб.</p>
                            <p>10 уровень = 500 руб.</p>
                            <p>25 уровень = 1500 руб.</p>
                            <p>50 уровень = 3000 руб.</p>
                            <p>75 уровень = 5000 руб.</p>
                            <p>100 уровень = 7500 руб.</p>
                            <button><Link to='/three'>Купить</Link></button>
                        </div>
                    </div>
                </div>
            </section>
            <section id="shop">
                <div class="shop">
                    <div class="container">
                        <div class="shop-list">
                            <div class="shop-inner">
                                <h1>Магазин предметов</h1>
                                <h3>Предмет за 100V = 20 руб.</h3>
                                <h3>Предмет за 100V = 20 руб.</h3>
                                <h3>Предмет за 100V = 20 руб.</h3>
                                <h3>Предмет за 100V = 20 руб.</h3>
                                <h3>Предмет за 100V = 20 руб.</h3>
                                <h3>{money}</h3>
                                <h3>{money}</h3>
                                <h3>{money}</h3>
                                <h3>{money}</h3>
                                <h3>{money}</h3>
                                <button onClick = {() => setMoney(money===''?(mon):'')}><a>Показать еще</a></button>
                                <button><Link to='/four'>Купить</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div class="prof">
                    <div class="container">
                        <div class="prof-list">
                            <div class="prof-inner">
                                <h5><span>1.</span>Список тех от кого может прийти уведомление в друзья:</h5>
                            </div>
                            <div class="prof-inner">
                                <h5><span>2.</span>У нас не всегда могут быть V-баксы на нужный вам предмет</h5>
                            </div>
                            <div class="prof-inner">
                                <h5><span>3.</span>Нужны работники</h5>
                                <h5>{milk}</h5>
                                <button onClick = {() => setMilk(milk===''?(mulo):'')}><a>Подробнее</a></button>
                            </div>
                        </div>
                        <div class="prof-link">
                            <h4>FS store<br />41.13.2077</h4>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default One;