from rest_framework import serializers
from . import models


class CategorySerialzer(serializers.ModelSerializer):
    class Meta:
        model = models.Category
        fields = (
            'pk',
            'name',
        )


class DateEntrySerialzer(serializers.ModelSerializer):
    class Meta:
        model = models.DateEntry
        fields = (
            'pk',
            'date',
        )


class CostItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CostItem
        fields = (
            'pk',
            'category',
            'date',
            'name',
            'value',
        )
