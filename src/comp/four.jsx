import { Link } from "react-router-dom";
import { useState } from 'react'

function Four() {
    const [milk, setMilk] = useState('')
    let mulo = 'У вас будет два выбора заработка 1.Вы будете получать 50% от продажи предметов с вашего аккаунта деньгами2.Все будет тоже самое но за исключением вы будете получать 50% V-баксами (не деньгами) Напишите нам через Telegram или WhatsApp'
    return (
        <div className="four">
            <header>
                <div class="con">
                    <div class="header-link">
                        <button><Link to='/'>Назад</Link></button>
                    </div>
                </div>
            </header>
            <div class="shop">
                <div class="container">
                    <div class="shop-list">
                        <div class="shop-inner">
                            <h1>Магазин предметов</h1>
                            <h3>Предмет за 100V = 20 руб.</h3>
                            <h3>Предмет за 200V = 40 руб.</h3>
                            <h3>Предмет за 300V = 60 руб.</h3>
                            <h3>Предмет за 400V = 80 руб.</h3>
                            <h3>Предмет за 500V = 100 руб.</h3>
                            <h3>Предмет за 800V = 150 руб.</h3>
                            <h3>Предмет за 1000V = 200 руб.</h3>
                            <h3>Предмет за 1200V = 250 руб.</h3>
                            <h3>Предмет за 1500V = 300 руб.</h3>
                            <h3 class="r3">Предмет за 2000V = 400 руб.</h3>
                            <p>Напишите нам в Telegram или WhatsApp<br />какой вы предмет хотите купить</p>
                            <h3><button><a href="./eror.html">Telegram</a></button></h3>
                            <h3><button><a href="./eror.html">WhatsApp</a></button></h3>
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

export default Four;