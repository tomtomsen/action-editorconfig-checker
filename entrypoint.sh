#!/bin/sh -l

output=$(ec -verbose)
exit=$?

echo $output
echo "::set-output name=output::$output"

exit $exit
