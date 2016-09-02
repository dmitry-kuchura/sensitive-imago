<div class="services">
    <div class="wSize">
        <div class="title_block">
            <div class="title_small"><?php echo $result->name; ?></div>
            <div class="title_big _white"><?php echo $result->title_big; ?></div>
            <div class="slogan _white"><?php echo $result->text; ?></div>
        </div>
        <div class="services_main">
            <div class="services_lister">
                <div class="services_lister_left w_fll">
                    <?php if (is_file(HOST.Core\HTML::media('images/services/main/' . $result->image_first))): ?>
                        <div data-img="<?php echo Core\HTML::media('images/services/main/' . $result->image_first) ?>" data-service="1" class="services_item cur">
                            <svg>
                                <use xlink:href="#icon_ser1"/>
                            </svg>
                            <span><?php echo $result->service_name_first; ?></span>
                        </div>
                    <?php else: ?>
                        <div data-img="<?php echo \Core\HTML::media('pic/no-image.png'); ?>" data-service="1" class="services_item cur">
                            <svg>
                                <use xlink:href="#icon_ser1"/>
                            </svg>
                            <span><?php echo $result->service_name_first; ?></span>
                        </div>
                    <?php endif; ?>
                    
                    <?php if (is_file(HOST.Core\HTML::media('images/services/main/' . $result->image_second))): ?>
                        <div data-img="<?php echo Core\HTML::media('images/services/main/' . $result->image_second) ?>" data-service="2" class="services_item">
                            <svg>
                                <use xlink:href="#icon_ser2"/>
                            </svg>
                            <span><?php echo $result->service_name_second; ?></span>
                        </div>
                    <?php else: ?>
                        <div data-img="<?php echo \Core\HTML::media('pic/no-image.png'); ?>" data-service="2" class="services_item">
                            <svg>
                                <use xlink:href="#icon_ser2"/>
                            </svg>
                            <span><?php echo $result->service_name_second; ?></span>
                        </div>
                    <?php endif; ?>
                    
                    <?php if (is_file(HOST.Core\HTML::media('images/services/main/' . $result->image_third))): ?>
                        <div data-img="<?php echo Core\HTML::media('images/services/main/' . $result->image_third) ?>" data-service="3" class="services_item">
                            <svg>
                                <use xlink:href="#icon_ser3"/>
                            </svg>
                            <span><?php echo $result->service_name_third; ?></span>
                        </div>
                    <?php else: ?>
                        <div data-img="<?php echo \Core\HTML::media('pic/no-image.png'); ?>" data-service="3" class="services_item">
                            <svg>
                                <use xlink:href="#icon_ser3"/>
                            </svg>
                            <span><?php echo $result->service_name_third; ?></span>
                        </div>
                    <?php endif; ?>
                    
                    <?php if (is_file(HOST.Core\HTML::media('images/services/main/' . $result->image_four))): ?>
                        <div data-img="<?php echo Core\HTML::media('images/services/main/' . $result->image_four) ?>" data-service="4" class="services_item">
                            <svg>
                                <use xlink:href="#icon_ser4"/>
                            </svg>
                            <span><?php echo $result->service_name_four; ?></span>
                        </div>
                    <?php else: ?>
                        <div data-img="<?php echo \Core\HTML::media('pic/no-image.png'); ?>" data-service="4" class="services_item">
                            <svg>
                                <use xlink:href="#icon_ser4"/>
                            </svg>
                            <span><?php echo $result->service_name_four; ?></span>
                        </div>
                    <?php endif; ?>
                </div>
                <div class="services_lister_right w_flr">
                    <?php if (is_file(HOST . Core\HTML::media('images/services/main/' . $result->image_four))): ?>
                        <img src="<?php echo Core\HTML::media('images/services/main/' . $result->image_first); ?>" alt="">
                    <?php else: ?>
                        <img src="<?php echo \Core\HTML::media('pic/no-image.png'); ?>" alt="">
                    <?php endif; ?>
                </div>
                <div class="w_clear"></div>
            </div>
            <div data-service="1" class="services_text wTxt cur"><?php echo $result->service_text_first; ?></div>
            <div data-service="2" class="services_text wTxt"><?php echo $result->service_text_second; ?></div>
            <div data-service="3" class="services_text wTxt"><?php echo $result->service_text_third; ?></div>
            <div data-service="4" class="services_text wTxt"><?php echo $result->service_text_four; ?></div>
            <div class="algoritm">
                <div class="algoritm_title"><?php echo $result->algoritm_title; ?></div>
                <div class="algoritm_list">
                    <div class="algoritm_item">
                        <div class="algoritm_svg">
                            <svg>
                            <use xlink:href="#icon_work1"/>
                            </svg>
                        </div>
                        <div class="algoritm_text_text"><?php echo $result->algoritm_first; ?></div>
                    </div>
                    <div class="algoritm_item">
                        <div class="algoritm_svg">
                            <svg>
                            <use xlink:href="#icon_work2"/>
                            </svg>
                        </div>
                        <div class="algoritm_text_text"><?php echo $result->algoritm_second; ?></div>
                    </div>
                    <div class="algoritm_item">
                        <div class="algoritm_svg">
                            <svg>
                            <use xlink:href="#icon_work3"/>
                            </svg>
                        </div>
                        <div class="algoritm_text_text"><?php echo $result->algoritm_third; ?></div>
                    </div>
                    <div class="algoritm_item">
                        <div class="algoritm_svg">
                            <svg>
                            <use xlink:href="#icon_work4"/>
                            </svg>
                        </div>
                        <div class="algoritm_text_text"><?php echo $result->algoritm_four; ?></div>
                    </div>
                    <div class="algoritm_item">
                        <div class="algoritm_svg">
                            <svg>
                            <use xlink:href="#icon_work5"/>
                            </svg>
                        </div>
                        <div class="algoritm_text_text"><?php echo $result->algoritm_five; ?></div>
                    </div>
                    <div class="w_clear"></div>
                </div>
            </div>
            <div class="virtual">
                <div class="virtual_text w_fll">
                    <div class="virtual_title"><?php echo $result->title_virtual; ?></div>
                    <div class="wTxt"><?php echo $result->text_virtual; ?></div>
                </div>
                <div class="virtual_img">
                    <img src="<?php echo \Core\HTML::media('pic/virtual.jpg'); ?>" alt="">
                </div>
                <div class="w_clear"></div>
            </div>
        </div>
    </div>
</div>