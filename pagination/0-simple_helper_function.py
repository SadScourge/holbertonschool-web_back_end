def index_range(page: int, page_size: int) -> tuple[int, int]:
    return ((page - 1) * page_size, page * page_size)