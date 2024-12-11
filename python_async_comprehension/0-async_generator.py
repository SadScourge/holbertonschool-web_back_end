import random
import asyncio

async def async_generator():
    for index in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
