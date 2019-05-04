from decimal import Decimal
from decimal import Decimal as d

from django.test import TestCase

# Create your tests here.
from django.utils.datetime_safe import datetime

from expenses.models import *


class TestDb(TestCase):

    def test_cat_create(self):
        Category.objects.create(name='tom', color='ffffff')

    def test_items_creation(self):
        Category.objects.create(name='tom', color='ffffff')
        DateEntry.objects.create(date=datetime(2019, 12, 11))
        entrys = []
        items = (('Kostka do gry', d(5.20)), ('Cyna', d(21.33)), ('Pudełko', d(34)))

        for name, price in items:
            entrys.append(Item(
                    category=Category.objects.get(),
                    date=DateEntry.objects.get(),
                    name='Kostka do gry',
                    value=Decimal(5.20)
                )
            )
        Item.objects.bulk_create(entrys)

        cat = Category.objects.get()
        print(cat.items.all())


def test_category():
    # Category.objects.create(name='tom', color='ffffff')
    # print(Category.objecs.all())
    print('somethin')
