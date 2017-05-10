<?php
    $slides_info = array();
    class slide {
        function __construct($url,$img,$name,$description) {
            $this->url = $url;
            $this->img = $img;
            $this->name = $name;
            $this->description = $description;
            global $slides_info;
            $slides_info[] = $this;
        }
    }
?>
