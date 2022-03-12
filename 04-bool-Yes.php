<?php

function returnAnswer(bool $b): string {
    if ($b === true) {
        return 'Yes';
    } else {
        return 'No';
    }
}

var_dump(returnAnswer(false));
