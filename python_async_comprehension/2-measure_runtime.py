async_comprehension = __import__('1-async_comprehension').async_comprehension

async def measure_runtime() -> float:
    import time
    start = time.time()
    await async_comprehension()
    finish = time.time()
    return finish - start
