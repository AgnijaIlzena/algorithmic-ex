<?php
/*
Your goal is to create a function that removes the first and last characters of a string.
You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/

function removeString(string $str): string
{
   return substr($str, 1, -1);
}

var_dump(removeString('emanuela'));
