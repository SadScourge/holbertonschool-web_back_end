#!/usr/bin/env python3
def floor(n: float) -> int:
    if n >= 0:
        return int(n)
    else:
        return int(n) - 1 if n != int(n) else int(n)