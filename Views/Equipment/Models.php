<div class="grid grid--1 grid--sm-2  grid--lg-1 grid--xl-2 grid--space-x2">
    <?php foreach ($result as $item): ?>
        <?php if (is_file(HOST . Core\HTML::media('images/equipment/main/' . $item->image))) {
            $image = Core\HTML::media('images/equipment/main/' . $item->image);
        } else {
            $image = Core\HTML::media('pic/no-image.png');
        } ?>
        <div class="grid__cell mediaBlock mediaBlockEquipment">
            <a href="#" class="mediaBlock__image" style="background-image: url('<?php echo $image; ?>');"></a>
            <div class="mediaBlock__content">
                <div class="mediaBlock__title">
                    <a href="<?php echo Core\HTML::link('models/' . $item->alias); ?>" class="mediaBlock__overflow"><?php echo $item->name; ?></a>
                </div>
                <div class="mediaBlock__text">
                    <div class="mediaBlock__textInner"><?php echo $item->text; ?></div>
                </div>
                <a href="#" class="button button--primary"><?php echo __('Подробнее'); ?></a>
            </div>
        </div>
    <?php endforeach; ?>
</div>
<hr>
<div class="grid grid--1 grid--sm-2 grid--space-x2">
    <div class="grid__cell">
        <div class="mediaBlock mediaBlock--air">
            <div class="mediaBlock__image"
                 style="background-image: url('images/compare.jpg');">
            </div>
            <div class="mediaBlock__content ">
                <div class="categoryLink__title">Сравнение моделей приборов</div>

                <a href="news_one.html" class="button button--inverse">Подробнее</a>
            </div>
        </div>
    </div>
    <div class="grid__cell">
        <div class="mediaBlock mediaBlock--air">
            <div class="mediaBlock__image"
                 style="background-image: url('images/complectation.jpg');">
            </div>
            <div class="mediaBlock__content ">
                <div class="categoryLink__title">Дополнительная комплектация</div>

                <a href="news_one.html" class="button button--inverse">Подробнее</a>
            </div>
        </div>
    </div>

</div>
<div class="sectionTitle sectionTitle--inner _mt-x3">Медицинское оборудование сенситив имаго</div>
<div class="wTxt">
    <p>Использует совершенно новую технологию при своей работе, которая основана на том факте, что
        каждый процесс, который происходит в организме человека, каждое заболевание, каждый
        возбудитель заболевания - все они имеют свой определенный энергетический спектр, который
        обязательно необходим для их существования. Можно этот энергетический спектр называть
        многими синонимами – «энергетическая шкала», «электромагнитные колебания», «электромагнитный
        фон» и т.д.</p>
    <p>При изучении это явления было установлено, что одинаковые процессы у различных людей имеют
        схожие показатели электромагнитного фона, и достаточно измерить у одного человека показатель
        какого-то заболевания, чтобы с уверенностью говорить, что этот показатель, в общем,
        свойственен этому заболеванию.</p>
    <p>При снятии информации с организма наше медицинское оборудование сравнивает показатели,
        полученные с обследуемого организма, с показателями в базе данных. При совпадении двух
        показателей (частот) происходит явление биорезонанса – увеличение амплитуды и частоты этих
        колебаний.</p>
    <p>При снятии информации с организма наше медицинское оборудование сравнивает показатели,
        полученные с обследуемого организма, с показателями в базе данных. При совпадении двух
        показателей (частот) происходит явление биорезонанса – увеличение амплитуды и частоты этих
        колебаний.</p>
</div>
