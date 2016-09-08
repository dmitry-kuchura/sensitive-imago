<?php
// Beginning group of pages: $n1...$n2
$n1 = 1;
$n2 = min($_count_out, $_total_pages);

// Ending group of pages: $n7...$n8
$n7 = max(1, $_total_pages - $_count_out + 1);
$n8 = $_total_pages;

// Middle group of pages: $n4...$n5
$n4 = max($n2 + 1, $_current - $_count_in);
$n5 = min($n7 - 1, $_current + $_count_in);
$use_middle = ($n5 >= $n4);

// Point $n3 between $n2 and $n4
$n3 = (int) (($n2 + $n4) / 2);
$use_n3 = ($use_middle && (($n4 - $n2) > 1));

// Point $n6 between $n5 and $n7
$n6 = (int) (($n5 + $n7) / 2);
$use_n6 = ($use_middle && (($n7 - $n5) > 1));

// Links to display as array(page => content)
$links = array();

// Generate links data in accordance with calculated numbers
for ($i = $n1; $i <= $n2; $i++) {
    $links[$i] = $i;
}
if ($use_n3) {
    $links[$n3] = '&hellip;';
}
for ($i = $n4; $i <= $n5; $i++) {
    $links[$i] = $i;
}
if ($use_n6) {
    $links[$n6] = '&hellip;';
}
for ($i = $n7; $i <= $n8; $i++) {
    $links[$i] = $i;
}
?>

<?php if ($_ajax != null): ?>
    <input type="hidden" class="lang" value="<?php echo \I18n::$lang; ?>">

    <div class="pagination <?php echo $_ajax ?>" data-pager="<?php echo $_ajax ?>">
        <button class="pagination__link pagination__link--prev pager_ajax" data-page="prev">&lt;</button>
        <?php foreach ($links as $number => $content): ?>
            <?php if ($number === $_current): ?>
                <button class="pagination__link pager_ajax is-active" data-page="<?php echo $content ?>"><?php echo $content ?></button>
            <?php else: ?>
                <button class="pagination__link pager_ajax" data-page="<?php echo $content ?>"><?php echo $content ?></button>
            <?php endif ?>
        <?php endforeach ?>
        <button class="pagination__link pagination__link--next pager_ajax" data-page="next">&gt;</button>
    </div>
<?php else: ?>
    <div class="pagination">
        <?php if ($_navigation): ?>
            <?php if ($_previous !== FALSE): ?>
                <a class="pagination__link pagination__link--prev" href="<?php echo Core\HTML::chars($page->url($_previous)) ?>">&lt;</a>
            <?php endif ?>
        <?php endif ?>
        <?php foreach ($links as $number => $content): ?>
            <?php if ($number === $_current): ?>
                <span class="pagination__link is-active"><?php echo $content ?></span>
            <?php else: ?>
                <a class="pagination__link" href="<?php echo Core\HTML::chars($page->url($number)) ?>"><?php echo $content ?></a>
            <?php endif ?>
        <?php endforeach ?>
        <?php if ($_navigation): ?>
            <?php if ($_next !== FALSE): ?>
                <a class="pagination__link pagination__link--next" href="<?php echo Core\HTML::chars($page->url($_next)) ?>">&gt;</a>
            <?php endif ?>
        <?php endif ?>
    </div>
<?php endif; ?>
