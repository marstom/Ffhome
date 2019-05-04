"""


https://www.django-rest-framework.org/tutorial/3-class-based-views/
"""
from django.shortcuts import render
from rest_framework.response import Response

from rest_framework.views import APIView

from rest_framework import generics

from . import serializers
from . import models


class CategoriesListAPIView(generics.ListCreateAPIView):
    queryset = models.Category.objects.all()
    serializer_class = serializers.CategorySerialzer

    class Meta:
        ordering = ('name',)


class CategoryCrudView(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Category.objects.all()
    serializer_class = serializers.CategorySerialzer

    class Meta:
        ordering = ('name',)


class DateEntrysListView(generics.ListCreateAPIView):
    queryset = models.DateEntry.objects.all()
    serializer_class = serializers.DateEntrySerialzer


class DateEntrysCrud(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.DateEntry.objects.all()
    serializer_class = serializers.DateEntrySerialzer


class CostsListView(generics.ListCreateAPIView):
    queryset = models.CostItem.objects.all()
    serializer_class = serializers.CostItemSerializer


class CostsCrudView(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.CostItem.objects.all()
    serializer_class = serializers.CostItemSerializer
