#!/usr/bin/env python3
"""
This module contains an asynchronous generator function.
"""

import random
import asyncio
from typing import AsyncGenerator

async def async_generator() -> AsyncGenerator[float, None]:
    """
    Asynchronous generator that yields a random float between 0 and 10.

    The generator will yield 10 random numbers, each after a 1-second delay.
    """
    for index in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
