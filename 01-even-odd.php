<?php

function even_or_odd(int $n): string {
    if ($n % 2 === 0) {
        return 'Even';
    } else {
        return 'Odd';
    }
}

var_dump(even_or_odd(24));

