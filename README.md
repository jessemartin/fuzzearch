fuzzearch
=========

A tiny implementation of fuzzy string searching, similar to sublime text's quick open file (cmd + p)

Usage
-----
A match is defined by a string that contain all of the query's characters, in order. Other chacracters may exist in-between.

For example:

The query `"sc"` matches the string `"sandwich"` because both `"s"` and `"c"` appear in `"sandwich"`, with an `"s"` occuring before a `"c"`.
