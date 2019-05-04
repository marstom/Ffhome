from django.contrib import admin
from . import models

admin.site.register(models.DateEntry)


class CostItemInline(admin.TabularInline):
    model = models.CostItem


class IncomeItemInline(admin.TabularInline):
    model = models.IncomeItem


class DateEntryInline(admin.TabularInline):
    model = models.DateEntry


@admin.register(models.Category)
class CategoryAdmin(admin.ModelAdmin):
    model = models.Category
    inlines = [CostItemInline, IncomeItemInline]

