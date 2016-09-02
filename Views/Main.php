<!DOCTYPE html>
<html lang="<?php echo \I18n::$lang; ?>" dir="ltr" class="no-js">
    <head>
        <?php echo Core\Widgets::get('Head'); ?>
        <?php foreach ($_seo['scripts']['head'] as $script): ?>
            <?php echo $script; ?>
        <?php endforeach ?>
        <?php echo $GLOBAL_MESSAGE; ?>
    </head>
    <body class="indexPage">
        <div class="pageWrapper">
            <?php echo Core\Widgets::get('Header'); ?>
            <div class="pageContainer">
                <section class="pageSection">
                    <div class="pageSize bg-doctor">
                        <div class="pageSection__topText">
                            Наша компания "Альфа-Мед Украина"<br>
                            представляет медицинское оборудование последнего поколения<br>
                            <b>АПК Сенситив Имаго (HSC Sensitiv Imago)</b>
                        </div>
                        <div class="layeredBlock">
                            <div class="layeredBlock__bottom"></div>
                            <svg class="layeredBlock__arrow">
                            <use xlink:href="hidden/sprite.svg#curve_arrow"></use>
                            </svg>
                            <div class="layeredBlock__top">
                                <p class="layeredBlock__description">
                                    Медицинское оборудование предназначено для неинвазивного комплексного биорезонансного обследования и
                                    лечения
                                    организма, а также для подбора лечения лекарственными препаратами
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="pageSection _bg-white">
                    <div class="pageSize" style="position: relative;">
                        <div class="sectionTitle">Основные возможности оборудования</div>
                        <div class="grid grid--space grid--1 grid--sm-2 grid--lg-3">
                            <div class="grid__cell">
                                <p><b>Диагностика у пациента:</b></p>
                                <ul class="customList">
                                    <li>Заболеваний и возможных осложнений</li>
                                    <li>Возбудителей заболеваний</li>
                                    <li>Слабых систем организма</li>
                                    <li>Всех нарушений в органах и их причин</li>
                                    <li>Аллергенов, токсинов, вредных продуктов</li>
                                    <li>Генетической предрасположенности</li>
                                    <li>Прогноза развития заболеваний в будущем</li>
                                </ul>
                            </div>
                            <div class="grid__cell _pr-x3">
                                <p><b>Лечебные возможности:</b></p>
                                <ul class="customList">
                                    <li>Индивидуальная эффективная cхема лечения препаратами</li>
                                    <li>Моментальная энергетическая коррекция любой болезни</li>
                                    <li>Подбор правильного питания</li>
                                    <li>Общее восстановление организма</li>
                                </ul>
                            </div>

                        </div>
                        <img class="compatibilityImage" src="css/pic/complex.png" alt="">
                    </div>
                </section>
                <section class="pageSection _p-none pageSection--partialBg">
                    <div class="pageSize">
                        <div class="sectionTitle sectionTitle--small _color-white">
                            Смотрите видео о Сенситив Имаго
                        </div>
                        <div class="grid grid--2 grid--md-3 grid--space grid--justify-center">
                            <div class="grid__cell">
                                <a href="https://www.youtube.com/watch?v=Im4qbR70hVY" class="videoLink"
                                   style='background-image: url("//img.youtube.com/vi/Im4qbR70hVY/maxresdefault.jpg");'></a>
                            </div>
                            <div class="grid__cell">
                                <a href="https://www.youtube.com/watch?v=Im4qbR70hVY" class="videoLink"
                                   style='background-image: url("//img.youtube.com/vi/Im4qbR70hVY/maxresdefault.jpg");'></a>
                            </div>
                            <div class="grid__cell">
                                <a href="https://www.youtube.com/watch?v=Im4qbR70hVY" class="videoLink"
                                   style='background-image: url("//img.youtube.com/vi/Im4qbR70hVY/maxresdefault.jpg");'></a>
                            </div>
                        </div>
                        <div class="pageSection__footer">
                            <a href="#" class="button button--primary button--in-sectionFooter">СМОТРЕТЬ БОЛЬШЕ</a>
                        </div>
                    </div>
                </section>
                <section class="pageSection _bg-white">
                    <div class="pageSize">
                        <div class="sectionTitle">Наши приемущества</div>
                        <div class="grid grid--1 grid--sm-2 grid--md-3 grid--lg-4 grid--justify-center grid--items-stretch">
                            <div class="grid__cell advantage">
                                <div class="advantage__icon">
                                    <img src="css/pic/advantage-icon1.svg" alt="">
                                </div>
                                <div class="advantage__title">Точность</div>
                                <div class="advantage__text">Комплексы Сенситив Имаго имеют подтвержденную точность диагностики до 96 %</div>
                                <a href='#' class="button button--inverse">Подробнее</a>
                            </div>
                            <div class="grid__cell advantage">
                                <div class="advantage__icon">
                                    <img src="css/pic/advantage-icon2.svg" alt="">
                                </div>
                                <div class="advantage__title">Эффективность</div>
                                <div class="advantage__text">Лечение большинства заболеваний человека </div>
                                <a href='#' class="button button--inverse">Подробнее</a>
                            </div>
                            <div class="grid__cell advantage">
                                <div class="advantage__icon">
                                    <img src="css/pic/advantage-icon3.svg" alt="">
                                </div>
                                <div class="advantage__title">Гарантия</div>
                                <div class="advantage__text">На оборудование мы даем до 2 лет гарантии</div>
                                <a href='#' class="button button--inverse">Подробнее</a>
                            </div>
                            <div class="grid__cell advantage">
                                <div class="advantage__icon">
                                    <img src="css/pic/advantage-icon4.svg" alt="">
                                </div>
                                <div class="advantage__title">Удобство</div>
                                <div class="advantage__text">Проведение онлайн презентации возможностей оборудования, а также качественное обучение онлайн по удобному для Вас графику</div>
                                <a href='#' class="button button--inverse">Подробнее</a>
                            </div>
                            <div class="grid__cell advantage">
                                <div class="advantage__icon">
                                    <img src="css/pic/advantage-icon5.svg" alt="">
                                </div>
                                <div class="advantage__title">Доставка</div>
                                <div class="advantage__text">В первую неделю с момента оплаты</div>
                                <a href='#' class="button button--inverse">Подробнее</a>
                            </div>
                            <div class="grid__cell advantage">
                                <div class="advantage__icon">
                                    <img src="css/pic/advantage-icon6.svg" alt="">
                                </div>
                                <div class="advantage__title">Сертификаты</div>
                                <div class="advantage__text">Оборудование сертифицировано в Европейском Союзе и многих странах мира </div>
                                <a href='#' class="button button--inverse">Подробнее</a>
                            </div>
                            <div class="grid__cell advantage">
                                <div class="advantage__icon">
                                    <img src="css/pic/advantage-icon7.svg" alt="">
                                </div>
                                <div class="advantage__title">Надежность</div>
                                <div class="advantage__text">Наши клиенты нам доверяют</div>
                                <a href='#' class="button button--inverse">Подробнее</a>
                            </div>
                            <div class="grid__cell advantage">
                                <div class="advantage__icon">
                                    <img src="css/pic/advantage-icon8.svg" alt="">
                                </div>
                                <div class="advantage__title">Экономия</div>
                                <div class="advantage__text">Возможность покупки в рассрочку</div>
                                <a href='#' class="button button--inverse">Подробнее</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="priceSection" style="background-image: url('css/pic/price_bg.jpg');">
                    <div class="priceSection__content">
                        <div class="priceSection__text">Медицинские комплексы Сенситив Имаго —<br>
                            диагностика и лечение всего организма человека
                        </div>
                        <span data-url="./hidden/callback.php" class="button button--primary button--in-sectionFooter js-mfp-ajax">УЗНАТЬ ПРАЙС</span>
                    </div>
                </section>
                <section class="pageSection _bg-white">
                    <div class="pageSize">
                        <div class="sectionTitle">Наша команда</div>
                        <div class="grid grid--2 grid--sm-3 grid--lg-5 grid--justify-center personal personal--graphics">
                            <div class="grid__cell person">
                                <div class="person__image"
                                     style="background-image: url('images/personal1.jpg');"></div>
                                <div class="person__name">Смирнова Татьяна</div>
                                <div class="person__position">Врач</div>
                            </div>
                            <div class="grid__cell person">
                                <div class="person__image"
                                     style="background-image: url('images/personal2.jpg');"></div>
                                <div class="person__name">Павленко Инна</div>
                                <div class="person__position">Администратор</div>
                            </div>
                            <div class="grid__cell person">
                                <div class="person__image"
                                     style="background-image: url('images/personal3.jpg');"></div>
                                <div class="person__name">Марченко Галина</div>
                                <div class="person__position">Директор</div>
                            </div>
                            <div class="grid__cell person">
                                <div class="person__image"
                                     style="background-image: url('images/personal4.jpg');"></div>
                                <div class="person__name">Шевченко Вита</div>
                                <div class="person__position">Менеджер-переводчик</div>
                            </div>
                            <div class="grid__cell person">
                                <div class="person__image"
                                     style="background-image: url('images/personal5.jpg');"></div>
                                <div class="person__name">Недилько Александр</div>
                                <div class="person__position">WEB-мастер</div>
                            </div>
                        </div>
                        <div class="pageSection__footer">
                            <a href="#" class="button button--primary button--in-sectionFooter">СМОТРЕТЬ ВСЕХ</a>
                        </div>
                    </div>
                </section>
                <section class="pageSection">
                    <div class="pageSize">
                        <div class="sectionTitle">Отзывы наших пользователей</div>
                        <div class="grid grid--2 grid--md-3 grid--space grid--justify-center">
                            <div class="grid__cell">
                                <a href="https://www.youtube.com/watch?v=Im4qbR70hVY"
                                   class="videoLink"
                                   style='background-image: url("//img.youtube.com/vi/Im4qbR70hVY/maxresdefault.jpg");'></a>
                            </div>
                            <div class="grid__cell">
                                <a href="https://www.youtube.com/watch?v=Im4qbR70hVY"
                                   class="videoLink"
                                   style='background-image: url("//img.youtube.com/vi/Im4qbR70hVY/maxresdefault.jpg");'></a>
                            </div>
                            <div class="grid__cell">
                                <a href="https://www.youtube.com/watch?v=Im4qbR70hVY"
                                   class="videoLink"
                                   style='background-image: url("//img.youtube.com/vi/Im4qbR70hVY/maxresdefault.jpg");'></a>
                            </div>
                        </div>
                        <div class="pageSection__footer">
                            <a href="#" class="button button--primary button--in-sectionFooter">СМОТРЕТЬ БОЛЬШЕ</a>
                        </div>
                    </div>
                </section>
                <section class="pageSection _bg-white">
                    <div class="pageSize">
                        <div class="sectionTitle">Отзывы наших пациентов</div>
                        <div class="grid grid--1 grid--sm-2 grid--md-3 grid--justify-center textReviews textReviews--small">
                            <div class="grid__cell textReview">
                                <svg class="textReview__icon">
                                <use xlink:href="hidden/sprite.svg#quotes"></use>
                                </svg>
                                <div class="textReview__name">
                                    Евгений Николаевич
                                </div>
                                <div class="textReview__subtitle">
                                    пациент, 57 лет
                                </div>
                                <div class="textReview__divider"></div>
                                <div class="textReview__text">
                                    <p class="textReview__overflow">
                                        Наконец то удалось выявить причину моих заболеваний: наличие бактерий Streptococcus haemolyticus и
                                        Streptococcus bovis. Прибор смог показать, в каком конкретно органе и системе органов
                                    </p>
                                </div>
                            </div>
                            <div class="grid__cell textReview">
                                <svg class="textReview__icon">
                                <use xlink:href="hidden/sprite.svg#quotes"></use>
                                </svg>
                                <div class="textReview__name">
                                    Анна Сергеевна
                                </div>
                                <div class="textReview__subtitle">
                                    пациент, 32 года
                                </div>
                                <div class="textReview__divider"></div>
                                <div class="textReview__text">
                                    <p class="textReview__overflow">
                                        Наконец то удалось выявить причину моих заболеваний: наличие бактерий Streptococcus haemolyticus и
                                        Streptococcus bovis. Прибор смог показать, в каком конкретно органе и системе органов
                                    </p>
                                </div>
                            </div>
                            <div class="grid__cell textReview">
                                <svg class="textReview__icon">
                                <use xlink:href="hidden/sprite.svg#quotes"></use>
                                </svg>
                                <div class="textReview__name">
                                    Марина Александровна
                                </div>
                                <div class="textReview__subtitle">
                                    пациент, 20 лет
                                </div>
                                <div class="textReview__divider"></div>
                                <div class="textReview__text">
                                    <p class="textReview__overflow">
                                        Наконец то удалось выявить причину моих заболеваний: наличие бактерий Streptococcus haemolyticus и
                                        Streptococcus bovis. Прибор смог показать, в каком конкретно органе и системе органов
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="pageSection__footer">
                            <a href="#" class="button button--primary button--in-sectionFooter">СМОТРЕТЬ БОЛЬШЕ</a>
                        </div>
                    </div>
                </section>
                <section class="pageSection _bg-secondary">
                    <div class="pageSize">
                        <div class="sectionTitle sectionTitle--white">Модели приборов</div>
                        <div class="grid grid--1 grid--sm-2 grid--space-x2">
                            <div class="grid__cell mediaBlock mediaBlock--inverse">
                                <a href="#" class="mediaBlock__image" style="background-image: url('images/model100-120.jpg');"></a>
                                <div class="mediaBlock__content">
                                    <div class="mediaBlock__title"><a href="" class="mediaBlock__overflow">Cенситив Имаго 100/120</a></div>
                                    <div class="mediaBlock__text">
                                        <div class="mediaBlock__textInner">
                                            Медицинское лечебно-диагностическое оборудование предназначено для неинвазивного
                                            комплексного
                                        </div>
                                    </div>
                                    <span data-url="./hidden/callback.php" class="button button--inverse-white js-mfp-ajax">Узнать прайс</span>
                                </div>
                            </div>
                            <div class="grid__cell mediaBlock mediaBlock--inverse">
                                <a href="#" class="mediaBlock__image" style="background-image: url('images/model500-520.jpg');"></a>
                                <div class="mediaBlock__content">
                                    <div class="mediaBlock__title"><a href="" class="mediaBlock__overflow">Cенситив Имаго 500/520</a></div>
                                    <div class="mediaBlock__text">
                                        <div class="mediaBlock__textInner">
                                            Медицинское лечебно-диагностическое оборудование предназначено для неинвазивного
                                            комплексного
                                        </div>
                                    </div>
                                    <span data-url="./hidden/callback.php" class="button button--inverse-white js-mfp-ajax">Узнать прайс</span>
                                </div>
                            </div>
                            <div class="grid__cell mediaBlock mediaBlock--inverse">
                                <a href="#" class="mediaBlock__image" style="background-image: url('images/model130.jpg');"></a>
                                <div class="mediaBlock__content">
                                    <div class="mediaBlock__title"><a href="" class="mediaBlock__overflow">Cенситив Имаго 130</a></div>
                                    <div class="mediaBlock__text">
                                        <div class="mediaBlock__textInner">
                                            Медицинское лечебно-диагностическое оборудование предназначено для неинвазивного
                                            комплексного
                                        </div>
                                    </div>
                                    <span data-url="./hidden/callback.php" class="button button--inverse-white js-mfp-ajax">Узнать прайс</span>
                                </div>
                            </div>
                            <div class="grid__cell mediaBlock mediaBlock--inverse">
                                <a href="#" class="mediaBlock__image" style="background-image: url('images/model530.jpg');"></a>
                                <div class="mediaBlock__content">
                                    <div class="mediaBlock__title"><a href="" class="mediaBlock__overflow">Cенситив Имаго 530</a></div>
                                    <div class="mediaBlock__text">
                                        <div class="mediaBlock__textInner">
                                            Медицинское лечебно-диагностическое оборудование предназначено для неинвазивного
                                            комплексного
                                        </div>
                                    </div>
                                    <span data-url="./hidden/callback.php" class="button button--inverse-white js-mfp-ajax">Узнать прайс</span>
                                </div>
                            </div>
                        </div>
                        <div class="pageSection__footer">
                            <a href="#" class="button button--primary button--in-sectionFooter">СМОТРЕТЬ БОЛЬШЕ</a>
                        </div>
                    </div>
                </section>
                <section class="pageSection _bg-white">
                    <div class="pageSize">
                        <div class="sectionTitle">Свежие новости</div>
                        <div class="grid grid--1 grid--sm-2 grid--space-x2 grid--items-start">
                            <div class="grid__cell mediaBlock">
                                <a href="#" class="mediaBlock__image" style="background-image: url('images/index_new1.jpg');">
                                    <div class="mediaBlock__date">
                                        22
                                        <small>фев</small>
                                    </div>
                                </a>
                                <div class="mediaBlock__content">
                                    <div class="mediaBlock__title"><a href="#" class="mediaBlock__overflow">Доступна новая усгула</a></div>
                                    <div class="mediaBlock__text">
                                        <div class="mediaBlock__textInner">
                                            Медицинское лечебно-диагностическое оборудование предназначено для неинвазивного
                                            комплексного
                                        </div>
                                    </div>
                                    <a href="news_one.html" class="button button--inverse">Подробнее</a>
                                </div>
                            </div>
                            <div class="grid__cell mediaBlock">
                                <a href="#" class="mediaBlock__image" style="background-image: url('images/index_new2.jpg');">
                                    <div class="mediaBlock__date">
                                        22
                                        <small>фев</small>
                                    </div>
                                </a>
                                <div class="mediaBlock__content">
                                    <div class="mediaBlock__title"><a href="#" class="mediaBlock__overflow">Онлайн обучение с прибором сенситив имаго</a></div>
                                    <div class="mediaBlock__text">
                                        <div class="mediaBlock__textInner">
                                            Медицинское лечебно-диагностическое оборудование предназначено для неинвазивного
                                            комплексного
                                        </div>
                                    </div>
                                    <a href="news_one.html" class="button button--inverse">Подробнее</a>
                                </div>
                            </div>
                            <div class="grid__cell mediaBlock">
                                <a href="#" class="mediaBlock__image" style="background-image: url('images/index_new3.jpg');">
                                    <div class="mediaBlock__date">
                                        22
                                        <small>фев</small>
                                    </div>
                                </a>
                                <div class="mediaBlock__content">
                                    <div class="mediaBlock__title"><a href="#" class="mediaBlock__overflow">Оборудование получило золотую медаль</a></div>
                                    <div class="mediaBlock__text">
                                        <div class="mediaBlock__textInner">
                                            Медицинское лечебно-диагностическое оборудование предназначено для неинвазивного
                                            комплексного
                                        </div>
                                    </div>
                                    <a href="news_one.html" class="button button--inverse">Подробнее</a>
                                </div>
                            </div>
                            <div class="grid__cell mediaBlock">
                                <a href="#" class="mediaBlock__image" style="background-image: url('images/index_new4.jpg');">
                                    <div class="mediaBlock__date">
                                        22
                                        <small>фев</small>
                                    </div>
                                </a>
                                <div class="mediaBlock__content">
                                    <div class="mediaBlock__title"><a href="#" class="mediaBlock__overflow">undefined</a></div>
                                    <div class="mediaBlock__text">
                                        <div class="mediaBlock__textInner">
                                            Медицинское лечебно-диагностическое оборудование предназначено для неинвазивного
                                            комплексного
                                        </div>
                                    </div>
                                    <a href="news_one.html" class="button button--inverse">Подробнее</a>
                                </div>
                            </div>
                        </div>
                        <div class="pageSection__footer">
                            <a href="#" class="button button--primary button--in-sectionFooter">СМОТРЕТЬ БОЛЬШЕ</a>
                        </div>
                    </div>
                </section>
            </div>
            <?php echo Core\Widgets::get('Footer'); ?>
        </div>
        <?php echo Core\Widgets::get('HiddenData'); ?>
    </body>
</html>