#!/usr/bin/env python3
def list_all(mongo_collection):
    """ list all documents in a collection """
    return [documents for documents in mongo_collection.find()]
