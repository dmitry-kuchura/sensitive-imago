<?php

namespace Core;

use Core\Image\Image as ImageClass;

class Files {

    /**
     *  Upload image
     *  @param string $mainFolder - name of th block in Config/images.php
     *  @return string            - filename
     */
    /*public static function uploadImage($mainFolder, $name = 'file') {
        if (!Arr::get($_FILES[$name], 'name')) {
            return false;
        }
        $need = Config::get('images.' . $mainFolder);
        if (!$need) {
            return false;
        }
        $ext = end(explode('.', $_FILES[$name]['name']));
        $filename = md5($_FILES[$name]['name'] . '_' . $mainFolder . time()) . '.' . $ext;
        $size = getimagesize($_FILES[$name]['tmp_name']);
        foreach ($need AS $one) {
            $path = HOST . HTML::media('/images/' . $mainFolder . '/' . Arr::get($one, 'path'));
            Files::createFolder($path, 0777);
            $file = $path . '/' . $filename;
            $image = ImageClass::factory($_FILES[$name]['tmp_name']);
            if ($size[0] > Arr::get($one, 'width') && $size[1] > Arr::get($one, 'height')) {
                if (Arr::get($one, 'resize')) {
                    $image->resize(Arr::get($one, 'width'), Arr::get($one, 'height'), ImageClass::INVERSE);
                }
                if (Arr::get($one, 'crop')) {
                    $image->crop(Arr::get($one, 'width'), Arr::get($one, 'height'));
                }
            }
            if (Arr::get($one, 'watermark') && is_file(HOST . Config::get('images.watermark'))) {
                $watermark = ImageClass::factory(HOST . Config::get('images.watermark'));
                $watermark->resize(ceil($image->width * 0.5), NULL, ImageClass::INVERSE);
                $image->watermark($watermark, $image->width - ceil($image->width * 0.5), $image->height - $watermark->height);
                $image->watermark($watermark, 0, 0);
            }
            $image->save($file, Arr::get($one, 'quality', 100));
        }
        
        // Save original photo
        $path = HOST . HTML::media('/images/' . $mainFolder . '/original');
        Files::createFolder($path, 0777);
        $file = $path . '/' . $filename;
        move_uploaded_file($_FILES[$name]['tmp_name'], $file);
        return $filename;
    }*/
    public static function uploadImage($mainFolder, $name = 'file') {
        if( Arr::get( $_FILES[$name], 'error' ) ) {
            return false;
        }
        if( !Arr::get( $_FILES[$name], 'name' ) ) {
            return false;
        }
        $need = Config::get('images.'.$mainFolder);
        if( !$need ) {
            return false;
        }
        $ext = end( explode('.', $_FILES[$name]['name']) );
        $filename = md5($_FILES[$name]['name'].'_'.$mainFolder.time());
        foreach( $need AS $one ) {
            $image = SimpleImage::factory($_FILES[$name]['tmp_name']);
            $path = HOST.HTML::media('/images/'.$mainFolder.'/'.Arr::get($one, 'path'));
            Files::createFolder($path, 0777);
            $file = $path . DIRECTORY_SEPARATOR . $filename . '.' . $ext;
            $new_width = Arr::get($one, 'width');
            $new_height = Arr::get($one, 'height');
            if (Arr::get($one, 'crop')) {
                if ($new_width && $new_height) {
                    $image->thumbnail($new_width, $new_height);
                } elseif ($new_width) {
                    $image->thumbnail($new_width);
                } elseif ($new_height) {
                    $image->thumbnail($new_height);
                }
            } elseif (Arr::get($one, 'resize')) {
                if ($new_width && $new_height) {
                    $image->best_fit($new_width, $new_height);
                } elseif ($new_width) {
                    $image->fit_to_width($new_width);
                } elseif ($new_height) {
                    $image->fit_to_height($new_height);
                }
            }
            if (Arr::get($one, 'watermark')) {
                $options = array();
                $options['path'] = HOST . Config::get('images.watermark.path');
                $options['width'] = (float)Config::get('images.watermark.width') ?: 0.4;
                $options['position'] = in_array(Config::get('images.watermark.position'), [
                    'top left', 'top right', 'top', 'bottom left', 'bottom right', 'bottom', 'left', 'right', 'center'
                ]) ? Config::get('images.watermark.position') : 'bottom right';
                $options['opacity'] = (float)Config::get('images.watermark.opacity') ?: 1;
                $options['offsetX'] = (int)$options['offsetX'] ?: 0;
                $options['offsetY'] = (int)$options['offsetY'] ?: 0;
                $watermark = SimpleImage::factory($options['path']);
                $watermark->fit_to_width($image->get_width() * $options['width']);
                $image->overlay($watermark, $options['position'], $options['opacity'], $options['offsetX'], $options['offsetY']);
                $image->overlay($watermark, 'top left', $options['opacity'], $options['offsetX'], $options['offsetY']);
            }
            $image->save($file, Arr::get($one, 'quality', 100));
        }
        $path = HOST.HTML::media('/images/'.$mainFolder.'/original');
        Files::createFolder($path, 0777);
        $image = SimpleImage::factory($_FILES[$name]['tmp_name']);
        $image->save($path . DIRECTORY_SEPARATOR . $filename . '.' . $ext, 100);
        return $filename.'.'.$ext;
    }

    public static function uploadFile($folder, $name = "file") {
        if (!Arr::get($_FILES[$name], 'name')) {
            return false;
        }
        $old_name = Arr::get($_FILES[$name], 'name');
        $old_name = explode(".", $old_name);
        if (!$old_name[1]) {
            return false;
        }

        $file_name = md5(rand(1000000, 9999999) . time()) . "." . $old_name[1];

        Files::createFolder(HOST . $folder, 0777);

        move_uploaded_file(Arr::get($_FILES[$name], 'tmp_name'), HOST . $folder . "/" . $file_name);

        return $file_name;
    }

    /**
     *  Delete image
     *  @param string $mainFolder - name of th block in Config/images.php
     *  @param string $filename   - name of the file we delete
     *  @return bool
     */
    public static function deleteImage($mainFolder, $filename) {
        $need = Config::get('images.' . $mainFolder);
        if (!$need) {
            return false;
        }
        foreach ($need AS $one) {
            $file = HOST . HTML::media('/images/' . $mainFolder . '/' . Arr::get($one, 'path') . '/' . $filename);
            @unlink($file);
        }
        $file = HOST . HTML::media('/images/' . $mainFolder . '/original/' . $filename);
        @unlink($file);
        return true;
    }

    /**
     *  Create folder with some rights (544 as default)
     *  @param string $path   - path to the dir
     *  @param string $rights - rights for the folder
     *  @return bool
     */
    public static function createFolder($path, $rights = 0544) {
        $path = str_replace(HOST, '', $path);
        $arr = explode('/', trim($path, '/'));
        $p = array();
        foreach ($arr AS $folder) {
            $p[] = $folder;
            $dir = HOST . '/' . implode('/', $p);
            if (!file_exists($dir) || !is_dir($dir)) {
                mkdir($dir, $rights);
            } else {
                chmod($dir, $rights);
            }
        }
        return true;
    }

}
