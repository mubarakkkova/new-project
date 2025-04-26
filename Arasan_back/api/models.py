from django.db import models
from django.contrib.auth.models import User


class Category(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(default='')
    image = models.CharField(max_length=200)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'image': self.image
        }



class Product(models.Model):
    name = models.CharField(max_length=150)
    price = models.FloatField(default=0)
    description = models.TextField(default='')
    image = models.CharField(max_length=200)
    likes = models.IntegerField(default=0)
    link_to_product = models.CharField(max_length=200)
    rating = models.IntegerField(default=0)
    category_id = models.ForeignKey(Category, on_delete=models.CASCADE, default=None)


    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description': self.description,
            'image': self.image,
            'likes': self.likes,
            'link_to_product': self.link_to_product,
            'rating': self.rating,
            'category_id': self.category_id
        }
    
    def __str__(self) -> str:
        return self.name



class Order(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, default=None)
    name = models.CharField(max_length=200)
    product_id = models.ForeignKey(Product, on_delete=models.CASCADE, default=None)
    quantity = models.IntegerField(default=0)
    amount = models.IntegerField(default=0)
    address = models.CharField(max_length=200)
    date = models.DateField()


    def to_json(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'name': self.name,
            'product_id': self.product_id,
            'quantity': self.quantity,
            'amount': self.amount,
            'address': self.address,
            'date': self.date
        }



class Comment(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, default=None)
    username = models.CharField(max_length=200)
    email = models.CharField(max_length=200)
    product_id = models.ForeignKey(Product, on_delete=models.CASCADE, default=None)
    body = models.CharField(max_length=500)
    date = models.DateField()


    def to_json(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'username': self.username,
            'email': self.email,
            'product_id': self.product_id,
            'body': self.body,
            'date': self.date
        }
