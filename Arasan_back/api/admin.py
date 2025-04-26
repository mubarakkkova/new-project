from django.contrib import admin

from api.models import Category, Product, Order, Comment

admin.site.register(Category)
admin.site.register(Product)

admin.site.register(Order)
admin.site.register(Comment)
