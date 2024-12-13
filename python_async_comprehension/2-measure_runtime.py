#!/usr/bin/env python3
"""
This module contains the measure_runtime function
"""
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    Measure the runtime of async_comprehension function
    """
    import time
    start = time.time()
    await async_comprehension()
    finish = time.time()
    return finish - start
