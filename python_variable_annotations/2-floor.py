#!/usr/bin/env python3
""" Basic annotations - floor """


def floor(n: float) -> int:
    """ takes a float (n) as argument and returns the floor of the float """
    if n >= 0:
        return int(n)
    else:
        return int(n) - 1 if n != int(n) else int(n)
