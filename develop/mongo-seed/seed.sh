#!/bin/bash

mongoimport --host mongodb -d dojo -c countries --file countries.json --jsonArray
mongoimport --host mongodb -d dojo -c beer --file beer.json --jsonArray
