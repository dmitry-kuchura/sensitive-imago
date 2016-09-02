<div class="works">
    <div class="wSize">
        <div class="title_block">
            <div class="title_small"><?php echo __('Наши работы'); ?></div>
            <div class="title_big"><?php echo __('Реализованные проекты'); ?></div>
        </div>
        <div class="works_list">
            <?php foreach ($result as $project): ?>
                <?php
                    $imgs = [];
                    foreach ($project->images as $img) {
                        if (is_file(HOST . Core\HTML::media('/images/projects/popup/' . $img->image))) {
                            $imgs[] = Core\HTML::media('/images/projects/popup/' . $img->image);
                        }
                    }
                ?>
                <div class="works_item">
                    <div class="works_item_wrap">
                        <div class="works_item_img">
                            <?php if (is_file(HOST . Core\HTML::media('images/projects/main/' . $project->image))): ?>
                                <img src="<?php echo Core\HTML::media('images/projects/main/' . $project->image); ?>" alt="">
                            <?php else: ?>
                                <img src="<?php echo Core\HTML::media('pic/no-image.png'); ?>" alt="">
                            <?php endif; ?>
                        </div>
                        <div class="works_opus">
                            <div class="works_category"><?php echo $project->cat_name; ?></div>
                            <div class="works_name"><?php echo $project->name; ?></div>
                            <?php $from = ['p class="text-justify"', '\n', chr(10), chr(13)]; ?>
                            <?php $to = ['p', '', '', '']; ?>
                            <?php $text = strip_tags($project->text, '<p></p>'); ?>
                            <div data-markup='{"prev":"<?php echo __('Предыдущий проект'); ?>","next":"<?php echo __('Следующий проект'); ?>","name": "<?php echo $project->name; ?>","share":"<?php echo __('Поделиться'); ?>","text":"<?php echo str_replace($from, $to, $text) ?>","id":"<?php echo $project->proj_id; ?>","img":<?php echo json_encode($imgs); ?>}' class="works_link mfiW"><?php echo __("Подробнее"); ?></div>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
        <div class="upload_more_block">
            <input type="hidden" class="lang" value="<?php echo \I18n::$lang; ?>">
            <input type="hidden" class="pageProjects" value="1">
            <div class="upload_more"><span class="moreProjects"><?php echo __('Загрузить еще'); ?></span></div>
        </div>
        <div class="hide_work">
            <div data-form="true" class="popup_form_block wForm" novalidate="novalidate" data-ajax="projects">
                <div class="form_inner"><?php echo __('Меня зовут'); ?>
                    <div class="form_input">
                        <input type="text" data-name="name" name="pop_name" required="" data-rule-word="true" data-rule-minlength="2" data-msg-minlength="<?php echo __('Минимальное кол-во'); ?>" data-msg-word="<?php echo __('Введите кооректное имя'); ?>" data-msg-required="<?php echo __('Введите кооректное имя'); ?>" placeholder="<?php echo __('полное имя'); ?>" aria-required="true">
                    </div>,  <?php echo __('я хотел бы получить подробный отчет о проекте'); ?>.  <?php echo __('Мой email'); ?>:
                    <div class="form_input">
                        <input type="email" data-name="email" name="pop_mail" required="" data-msg-required="<?php echo __('Укажите корректный email'); ?>" data-rule-email="true" data-msg-email="<?php echo __('Укажите корректный email'); ?>" placeholder="email@mail.com" aria-required="true">
                    </div>
                </div>
                <input type="hidden" data-name="lang" value="<?php echo \I18n::$lang; ?>" />
                <input type="hidden" name="token" data-name="token" value="<?php echo $_SESSION['token']; ?>" />
                <input type="hidden" name="project" data-name="project" value="">
                <button class="wSubmit"><span><?php echo __('Получить подробный отчет'); ?></span></button>
            </div>
        </div>
    </div>
</div>