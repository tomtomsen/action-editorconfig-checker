#!/bin/sh -l

echo $PWD
which ec
output=$(ec -verbose)
echo $output
echo "::set-output name=output::$output"
