from django.db import models


class Category(models.Model):
    name = models.CharField(verbose_name='Nazwa', max_length=100)
    color = models.CharField(verbose_name='Kolor html', max_length=6, default='ffffff')

    def __str__(self):
        return f'{self.name}'


class DateEntry(models.Model):
    date = models.DateField()

    def __str__(self):
        return f'Date: {self.date}'


class Item(models.Model):
    category = models.ForeignKey(Category, related_name='items', verbose_name='Kategoria', on_delete=models.CASCADE)
    date = models.ForeignKey(DateEntry, related_name='date_belongs', on_delete=models.CASCADE) # todo change to periods
    name = models.CharField(verbose_name='Nazwa', max_length=100)
    value = models.DecimalField(verbose_name='Kwota', max_digits=12, decimal_places=2)

    def __str__(self):
        return f'{self.name}: {self.value} zł'
