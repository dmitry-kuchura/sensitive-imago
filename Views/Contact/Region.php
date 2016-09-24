<?php foreach ($regions as $region): ?>
    <div class="region">
        <div class="region__caption categoryLink__title"><?php echo $region->name; ?></div>
        <div class="region__list grid grid--3 grid--lg-4 grid--space">
            <?php foreach ($branches as $branch): ?>
                <?php if ($branch->group == $region->id): ?>
                    <div class="grid__cell">
                        <button class="region__link js-mfp-ajax"
                                data-url="<?php echo Core\HTML::link('hidden/region'); ?>".
                                data-param='{"branch": <?php echo $branch->row_id; ?>}'>
                            <?php echo $branch->name; ?>
                        </button>
                    </div>
                <?php endif; ?>
            <?php endforeach; ?>
        </div>
    </div>
    <hr>
<?php endforeach; ?>