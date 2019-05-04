from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('categories/', views.CategoriesListAPIView.as_view(), name='categories'),
    path('categories/<int:pk>/', views.CategoryCrudView.as_view(), name='category'),
    path('costs/', views.CostsListView.as_view(), name='costs'),
    path('costs/<int:pk>', views.CostsCrudView.as_view(), name='cost'),
    path('dates/', views.DateEntrysListView.as_view(), name='dates'),
    path('dates/<int:pk>', views.DateEntrysCrud.as_view(), name='date'),
]