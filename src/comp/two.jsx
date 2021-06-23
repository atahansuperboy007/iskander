import { Link } from "react-router-dom";
import { useState } from 'react'

function Two() {
    const [milk, setMilk] = useState('')
    let mulo = 'У вас будет два выбора заработка 1.Вы будете получать 50% от продажи предметов с вашего аккаунта деньгами2.Все будет тоже самое но за исключением вы будете получать 50% V-баксами (не деньгами) Напишите нам через Telegram или WhatsApp'
    return (
        <div className="two">
            <div class="intro">
                <div class="video">
                    <video class="video-media" autoplay muted loop
                        src=""></video>
                </div>
            </div>
            <div class="welcome">
                <div class="welcome-color">
                    <div class="container-2">
                        <div class="welcome-lis">
                            <div class="welcome-link">
                                <h2>регистрация</h2>
                                <div class="welcome-input">
                                    <input id="in1" placeholder="Введите свой ник в Fortnite" />
                                    <button id="lod"><Link to='/'>Далее</Link></button>
                                </div>
                                <p>Кагда вы зарегистрируйтесь нужно подождать два дня<br />чтобы вы могли кипить у нас предмет</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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

export default Two;