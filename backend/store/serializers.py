from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from .models import User, Product, Order, OrderItem

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password', 'address']
        extra_kwargs = {
            'password': {'write_only': True}  # Ensure password isn't returned in responses
        }

    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data['password'])  # Hash password
        return super().create(validated_data)

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'



class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = ['id', 'product', 'quantity', 'price']  # Exclude 'order'


class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True)  # Nested order items

    class Meta:
        model = Order
        fields = '__all__'

    def create(self, validated_data):
        items_data = validated_data.pop('items', [])  # Safely pop the items
        order = Order.objects.create(**validated_data)  # Create the order instance

        # Create the related OrderItem instances
        for item_data in items_data:
            OrderItem.objects.create(order=order, **item_data)

        return order


