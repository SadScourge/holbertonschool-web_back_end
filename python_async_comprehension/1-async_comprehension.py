#!/usr/bin/env python3
"""
This module contains a coroutine that collects
10 random numbers using an async generator.
"""
import typing
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> typing.List[float]:
    """
    Asynchronously collect 10 random numbers using an async generator
    """
    return [index async for index in async_generator()]
