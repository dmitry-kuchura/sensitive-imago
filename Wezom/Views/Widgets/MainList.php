<?php if( \Core\User::caccess() != 'edit' ): ?>
    <?php if ($main == 1): ?>
        <i class="fa-check green"></i>
    <?php else: ?>
        <i class="fa-dot-circle-o red"></i>
    <?php endif ?>
<?php endif; ?>
<?php if( \Core\User::caccess() == 'edit' ): ?>
    <a
        data-pub="<b><?php echo __('Снять с публикации'); ?></b><br><?php echo __('Опубликовано'); ?>"
        data-unpub="<b><?php echo __('Опубликовать'); ?></b><br><?php echo __('Не опубликовано'); ?>"
        title="<?php echo $main == 1 ? '<b>'.__('Снять с публикации').'</b><br>'.__('Опубликована') : '<b>'.__('Опубликовать новость').'</b><br>'.__('Не опубликовано'); ?>"
        data-status="<?php echo $main; ?>"
        data-id="<?php echo $id; ?>"
        href="#"
        class="setStatus bs-tooltip btn btn-xs <?php echo $main == 1 ? 'btn-success' : 'btn-danger' ?>"
        >
        <?php if ($main == 1): ?>
            <i class="fa-check"></i>
        <?php else: ?>
            <i class="fa-dot-circle-o"></i>
        <?php endif ?>
    </a>
<?php endif; ?>