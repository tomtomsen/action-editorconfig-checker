#!/bin/sh -l

echo $PWD
which ec
output=$(ec)
echo $output
echo "::set-output name=output::$output"
