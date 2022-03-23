#!/bin/bash

function spin(){
  sp="/-\|"
  sec=`expr $1 \* 8`
  for (( i = 0; i <=sec; i++ ))
  do
    j=1
    for j in {1..8}
    do
      sleep 0.115s
      printf "\b${sp:i++%${#sp}:1}"
    done
  done
}

function wait(){
  spin 1 # seconds multiplier
}

printf ' >> HTML linter check...  \n'
wait
npx hint .
printf '| ...FINISHED <<'

printf '\n >> SCSS linter check...  '
wait
npx stylelint "**/*.scss"
printf ' ...FINISHED <<'

printf '\n >> JavaScript linter check...  '
wait
npx eslint .
printf ' ...FINISHED <<\n'