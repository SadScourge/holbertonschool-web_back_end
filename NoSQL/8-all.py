#!/usr/bin/env python3
""" This module contains the list_all function """


def list_all(mongo_collection):
    """ list all documents in a collection """
    return [documents for documents in mongo_collection.find()]
