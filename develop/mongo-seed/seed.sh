#!/bin/bash

mongoimport --host mongodb -d dojo -c beers --type csv --file database.csv --headerline
