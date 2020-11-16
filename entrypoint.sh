#!/bin/sh -l

echo $PWD
which ec
output=$(ec -verbose)
exit=$?
echo $exit
echo $output
echo "::set-output name=output::$output"

exit $exit
