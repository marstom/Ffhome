from django.db import models
from django.db.models import Sum


class Category(models.Model):
    """ Category - home, company, others ..."""
    name = models.CharField(verbose_name='Nazwa', max_length=100)
    color = models.CharField(verbose_name='Kolor html', max_length=6, default='ffffff')

    def __str__(self):
        return f'{self.name}'


class DateEntry(models.Model):
    """ Date entry for item """
    date = models.DateField()

    def __str__(self):
        return f'Date: {self.date}'


class ValueQuerySet(models.QuerySet):
    def all_costs(self):
        return self.aggregate(all_costs=Sum('value')).get('all_costs')

class Value(models.Model):
    """ Abstract cost model for costs and incomes """
    name = models.CharField(verbose_name='Nazwa', max_length=100)
    value = models.DecimalField(verbose_name='Kwota', max_digits=12, decimal_places=2)

    objects = ValueQuerySet.as_manager()

    class Meta:
        abstract = True


class CostItem(Value):
    category = models.ForeignKey(Category, related_name='cost_items', verbose_name='Kategoria',
                                 on_delete=models.CASCADE, null=True, blank=True)
    date = models.ForeignKey(DateEntry, related_name='cost_items',
                             on_delete=models.CASCADE, null=True, blank=True)


    def __str__(self):
        return f'Cost: {self.name}: {self.value} zł'


class IncomeItem(Value):
    category = models.ForeignKey(Category, related_name='income_items', verbose_name='Kategoria',
                                 on_delete=models.CASCADE, null=True, blank=True)
    date = models.ForeignKey(DateEntry, related_name='income_items',
                             on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return f'Income: {self.name}: {self.value} zł'
