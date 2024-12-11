async_generator = __import__('0-async_generator').async_generator

async def async_comprehension():
    return [index async for index in async_generator()]
