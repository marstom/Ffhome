

from rest_framework import serializers
from . import models


class CategorySerialzer(serializers.ModelSerializer):

    class Meta:
        model = models.Category
        fields = (
            'pk',
            'name',
        )

