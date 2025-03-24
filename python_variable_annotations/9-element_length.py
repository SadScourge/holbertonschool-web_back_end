#!/usr/bin/env python3
""" Let's duck type an iterable object """
from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    Returns a list of tuples, where each tuple
    contains an element from the input iterable
    and its corresponding length.
    """
    return [(i, len(i)) for i in lst]
