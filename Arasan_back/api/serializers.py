from rest_framework import serializers

from api.models import Category, Product, Order, Comment



class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name', 'description', 'image',)


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'name', 'price', 'description', 'image', 'likes', 'link_to_product', 'rating', 'category_id',)


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ('id', 'user_id', 'name', 'product_id', 'quantity', 'amount', 'address', 'date')


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ('id', 'user_id', 'username', 'email', 'product_id', 'body', 'date')


