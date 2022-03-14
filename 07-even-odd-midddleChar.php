<?php

/*
 * You are going to be given a word. Your job is to return the middle character of the word.
 * If the word's length is odd, return the middle character.
 * If the word's length is even, return the middle 2 characters.
 */

function getMiddle($text) {
    $length = strlen($text);
    $middle = $length/2;
    if ($length % 2 === 0) {
        return substr($text, floor($middle) - 1, 2);
    } else {
        return substr ($text, $middle, 1);
    }
}

var_dump(getMiddle('testing'));
