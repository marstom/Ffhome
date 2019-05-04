from django.contrib import admin
from . import models

admin.site.register(models.DateEntry)
admin.site.register(models.Item)



class ItemInline(admin.TabularInline):
    model = models.Item

class DateEntryInline(admin.TabularInline):
    model = models.DateEntry

@admin.register(models.Category)
class CategoryAdmin(admin.ModelAdmin):
    model = models.Category
    inlines = [ItemInline]
