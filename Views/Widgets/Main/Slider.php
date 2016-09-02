<?php if (count($sliders)): ?>
    <div class="slider_block">
        <div class="slider_bg">
            <div class="slider_bg_container">
                <div class="js-slider_bg">
                    <?php $i = 1; ?>
                    <?php foreach ($sliders as $slider): ?>
                        <img src="<?php echo Core\HTML::media('images/slider/bg/' . $slider->bg); ?>" alt="" data-slide="<?php echo $i; ?>">
                        <?php $i++; ?>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
        <div class="wSize">
            <div class="slider">
                <div class="js-slider css-slider">
                    <ul>
                        <?php $i = 1; ?>
                        <?php foreach ($sliders as $slider): ?>
                            <?php if (is_file(HOST . Core\HTML::media('images/slider/main/' . $slider->image))): ?>
                                <li>
                                    <div class="slide_top_text">
                                        <div class="head_text">Beatus –</div>
                                        <div class="slider_title"><?php echo $slider->name; ?></div>
                                        <div class="middle_text"><?php echo $slider->text; ?></div>
                                        <div class="btn_go_next_block">
                                            <div data-anchor="about" data-slide="<?php echo $i; ?>" class="btn_go_next js-anchor"><?php echo __('Подробнее'); ?></div>
                                        </div>
                                    </div>
                                    <img src="<?php echo Core\HTML::media('images/slider/main/' . $slider->image); ?>" alt="<?php echo $slider->name; ?>">
                                </li>
                            <?php else: ?>
                                <li>
                                    <div class="slide_top_text">
                                        <div class="head_text">Beatus –</div>
                                        <div class="slider_title"><?php echo $slider->name; ?></div>
                                        <div class="middle_text"><?php echo $slider->text; ?></div>
                                        <div class="btn_go_next_block">
                                            <div data-anchor="about" data-slide="<?php echo $i; ?>" class="btn_go_next js-anchor"><?php echo __('Подробнее'); ?></div>
                                        </div>
                                    </div>
                                    <img src="<?php echo Core\HTML::media('pic/no-slider.png'); ?>" alt="<?php echo $slider->name; ?>">
                                </li>
                            <?php endif; ?>
                            <?php $i++; ?>
                        <?php endforeach; ?>
                    </ul>
                    <div class="js-slider_pagg"></div>
                </div>
                <div class="prev js-prev">
                    <svg>
                    <use xlink:href="#icon_prev"/>
                    </svg>
                </div>
                <div class="next js-next">
                    <svg>
                    <use xlink:href="#icon_next"/>
                    </svg>
                </div>
            </div>
        </div>
    </div>
<?php endif; ?>