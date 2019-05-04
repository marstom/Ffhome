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
        ordering = ('name', )


    # def list(self, request):
    #     # Note the use of `get_queryset()` instead of `self.queryset`
    #     queryset = self.get_queryset()
    #     serializer = serializers.CategorySerialzer(queryset, many=True)
    #     return Response(serializer.data)

