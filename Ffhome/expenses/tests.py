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
            entrys.append(CostItem(
                    category=Category.objects.get(),
                    date=DateEntry.objects.get(),
                    name=name,
                    value=Decimal(5.20)
                )
            )
        CostItem.objects.bulk_create(entrys)

        cat = Category.objects.get()
        print(cat.cost_items.all())
        print(cat.cost_items.all_costs())

        print(cat.income_items.all())
        assert cat.cost_items.count() == 3
        assert cat.income_items.count() == 0

    def test_items_creation_no_date(self):
        Category.objects.create(name='tom', color='ffffff')
        DateEntry.objects.create(date=datetime(2019, 12, 11))
        entrys = []
        items = (('Kostka do gry', d(5.20)), ('Cyna', d(21.33)), ('Pudełko', d(34)))

        for name, price in items:
            entrys.append(CostItem(
                category=None,
                date=None,
                name=name,
                value=Decimal(5.20)
            )
            )
        CostItem.objects.bulk_create(entrys)

        assert CostItem.objects.count() == 3


def test_category():
    # Category.objects.create(name='tom', color='ffffff')
    # print(Category.objecs.all())
    print('somethin')
