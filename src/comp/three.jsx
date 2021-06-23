import { Link } from "react-router-dom";
import { useState } from 'react'

function Three() {
    const [milk, setMilk] = useState('')
    let mulo = 'У вас будет два выбора заработка 1.Вы будете получать 50% от продажи предметов с вашего аккаунта деньгами2.Все будет тоже самое но за исключением вы будете получать 50% V-баксами (не деньгами) Напишите нам через Telegram или WhatsApp'
    return (
        <div className="three">
            <header>
                <div class="con">
                    <div class="header-linka">
                        <button><Link to='/'>Назад</Link></button>
                    </div>
                </div>
            </header>
            <section>
                <div class="busta">
                    <div class="container2">
                        <div class="bust-list">
                            <h1>Прокачиваем<br />боевой пропуск</h1>
                            <p>1 уровень = 25 руб.</p>
                            <p>10 уровень = 500 руб.</p>
                            <p>25 уровень = 1500 руб.</p>
                            <p>50 уровень = 3000 руб.</p>
                            <p>75 уровень = 5000 руб.</p>
                            <p>100 уровень = 7500 руб.</p>
                            <p>Напишите нам в<br />Telegram или WhatsApp<br />какой вы предмет хотите<br />купить</p>
                            <h3><button><a href="./eror.html">Telegram</a></button></h3>
                            <h3><button><a href="./eror.html">WhatsApp</a></button></h3>
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
                                <h5 id="lob">{milk}</h5>
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

export default Three;