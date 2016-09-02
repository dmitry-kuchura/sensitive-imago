<div class="news">
    <div class="wSize">
        <div class="title_block">
            <div class="title_small _white"><?php echo __('Новости'); ?></div>
            <div class="title_big _white"><?php echo __('Актуально'); ?></div>
        </div>
        <div class="news_list w_clearfix">
            <?php foreach ($result as $news): ?>
                <div class="news_item">
                    <div class="news_item_wrap">
                        <div class="news_item_container">
                            <?php if (is_file(HOST . Core\HTML::media('images/news/main/' . $news->image))): ?>
                                <img src="<?php echo Core\HTML::media('/images/news/main/' . $news->image); ?>" alt="">
                            <?php else: ?>
                                <img src="<?php echo Core\HTML::media('pic/no-image.png'); ?>" alt="">
                            <?php endif; ?>
                            <div class="news_item_inner">
                                <div class="category_date">
                                    <div class="category"><?php echo __('Новости'); ?></div><span>/</span>
                                    <div class="date"><?php echo date('d/m/Y', $news->date); ?></div>
                                    <?php $from = ['p class="text-justify"', '\n', chr(10), chr(13), 'style="text-align: right;"', 'style="text-align: center;"', 'style="text-align: justify;"']; ?>
                                    <?php $to = ['p', '', '', '']; ?>
                                    <?php $text = strip_tags($news->text, '<p></p>'); ?>
                                    <?php if (is_file(HOST . Core\HTML::media('images/news/popup/' . $news->image))): ?>
                                        <div data-markup='{"category":"<?php echo __('Новости'); ?>","date":"<?php echo date('d/m/Y', $news->date); ?>","prev":"<?php echo __('Предыдущая новость'); ?>","next":"<?php echo __('Следующая новость'); ?>","name": "<?php echo $news->name; ?>","share":"<?php echo __('Поделиться'); ?>","img":["<?php echo Core\HTML::media('/images/news/popup/' . $news->image); ?>"],"text":"<?php echo str_replace($from, $to, $text); ?>","id":"1"}' class="news_name mfiN"><?php echo $news->name; ?></div>
                                    <?php else: ?>
                                        <div data-markup='{"category":"<?php echo __('Новости'); ?>","date":"<?php echo date('d/m/Y', $news->date); ?>","prev":"<?php echo __('Предыдущая новость'); ?>","next":"<?php echo __('Следующая новость'); ?>","name": "<?php echo $news->name; ?>","share":"<?php echo __('Поделиться'); ?>","img":["<?php echo Core\HTML::media('pic/no-news-popup.png'); ?>"],"text":"<?php echo str_replace($from, $to, $text); ?>","id":"1"}' class="news_name mfiN"><?php echo $news->name; ?></div>
                                    <?php endif; ?>
                                </div>
                            </div>
                            <div class="news_soc"><span><?php echo __('Поделиться'); ?></span>
                                <a href="<?php echo Core\Config::get('socials.facebook'); ?>" target="_blank" class="pop_face">
                                    <svg>
                                    <use xlink:href="#icon_face"/>
                                    </svg>
                                </a>
                                <a href="<?php echo Core\Config::get('socials.twitter'); ?>" target="_blank" class="pop_twit">
                                    <svg>
                                    <use xlink:href="#icon_twit"/>
                                    </svg>
                                </a>
                                <a href="<?php echo Core\Config::get('socials.google'); ?>" target="_blank" class="pop_google">
                                    <svg>
                                    <use xlink:href="#icon_google"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
        <div class="upload_more_block">
            <input type="hidden" class="lang" value="<?php echo \I18n::$lang; ?>">
            <input type="hidden" class="pageNews" value="1">
            <div class="upload_more">
                <span class="moreNews"><?php echo __('Загрузить еще'); ?></span>
            </div>
        </div>
    </div>
</div>