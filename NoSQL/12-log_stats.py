#!/usr/bin/env python3
""" This module contains the log_stats function """


from pymongo import MongoClient


def log_stats():
    """Provides some stats about Nginx logs stored in MongoDB."""
    client = MongoClient()
    collection = client.logs.nginx

    total_logs = collection.count_documents({})
    print(f"{total_logs} logs")

    print("Methods:")
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    for method in methods:
        count = collection.count_documents({"method": method})
        print(f"\tmethod {method}: {count}")

    stCheck = collection.count_documents({"method": "GET", "path": "/status"})
    print(f"{stCheck} status check")


if __name__ == "__main__":
    log_stats()
