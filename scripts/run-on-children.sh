#!/bin/bash

for d in ./*/; do (cd "$d" && $1); done
