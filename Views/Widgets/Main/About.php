<div class="about">
    <div class="wSize">
        <div class="title_block">
            <div class="title_small"><?php echo $result->name; ?></div>
            <div class="title_big"><?php echo $result->title_big; ?></div>
            <div class="slogan"><?php echo $result->slogan; ?></div>
        </div>
        <div class="about_title"><?php echo $result->about_title; ?></div>
        <div class="wTxt"><?php echo $result->text; ?></div>
        <div class="now_block">
            <div class="now_block_text">
                <div class="now_title"><?php echo $result->now_title; ?></div>
                <?php echo $result->now_list; ?>
            </div>
        </div>
        <div class="beuseful">
            <div class="beuseful_text_block">
                <div class="beuseful_title"><?php echo $result->beuseful_title; ?></div>
                <div class="beuseful_text"><?php echo $result->beuseful_text; ?></div>
                <div data-anchor="services" class="beuseful_link js-anchor"><?php echo $result->beuseful_link; ?></div>
            </div>
            <div class="beuseful_slider_block">
                <div class="beuseful_slider_wrap">
                    <div class="beuseful_slider">
                        <ul>
                            <?php if (is_file(HOST . Core\HTML::media('images/slider_about/main/' . $result->slider_first))): ?>
                                <li>
                                    <div class="beuseful_text_slide beuseful_text1"><?php echo $result->beuseful_text1; ?></div>
                                    <img src="<?php echo Core\HTML::media('images/slider_about/main/' . $result->slider_first); ?>" alt="" data-anchor="services" class="js-anchor">
                                </li>
                            <?php endif; ?>
                            <?php if (is_file(HOST . Core\HTML::media('images/slider_about/main/' . $result->slider_second))): ?>
                                <li>
                                    <div class="beuseful_text_slide beuseful_text2"><?php echo $result->beuseful_text2; ?></div>
                                    <img src="<?php echo Core\HTML::media('images/slider_about/main/' . $result->slider_second); ?>" alt="" data-anchor="services" class="js-anchor">
                                </li>
                            <?php endif; ?>
                            <?php if (is_file(HOST . Core\HTML::media('images/slider_about/main/' . $result->slider_third))): ?>
                                <li>
                                    <div class="beuseful_text_slide beuseful_text3"><?php echo $result->beuseful_text3; ?>
                                        <div class="w_clear"></div>
                                        <span><?php echo $result->beuseful_slider; ?></span>
                                    </div>
                                    <img src="<?php echo Core\HTML::media('images/slider_about/main/' . $result->slider_third); ?>" alt="" data-anchor="services" class="js-anchor">
                                </li>
                            <?php endif; ?>
                        </ul>
                        <div class="beuseful_pagg">
                            <div class="js-prev">
                                <svg>
                                <use xlink:href="#icon_prev"/>
                                </svg>
                            </div>
                            <div class="js-next">
                                <svg>
                                <use xlink:href="#icon_next"/>
                                </svg>
                            </div>
                            <div class="js-beuseful_pagg"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w_clear"></div>
        </div>
        <div class="ourmission">
            <div class="ourmission_img w_fll">
                <img src="<?php echo \Core\HTML::media('pic/mission.jpg'); ?>" alt="">
            </div>
            <div class="ourmission_text w_flr">
                <div class="mission_title"><?php echo $result->mission_title; ?></div>
                <div class="mission_text wTxt"><?php echo $result->mission_text; ?></div>
            </div>
            <div class="w_clear"></div>
        </div>
    </div>
</div>