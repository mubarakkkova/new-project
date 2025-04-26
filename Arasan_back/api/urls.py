from django.urls import path

from rest_framework_jwt.views import obtain_jwt_token

# from api.views import ProductListAPIView, ProductDetailAPIVIEW, catergory_list, catergory_detail, catergory_products

from api.views import *



urlpatterns = [
    path('login/', obtain_jwt_token),

    path('categories/', CategoryListAPIView.as_view()),
    path('categories/<int:pk>/', CategoryDetailAPIVIEW.as_view()),
    path('categories/<int:pk>/products/', category_products),

    path('categories/<int:pk>/products/<int:product_id>/', category_product),


    path('products/', ProductListAPIView.as_view()),
    path('products/<int:pk>/', ProductDetailAPIVIEW.as_view()),

    path('products/<int:pk>/comments/', comment_list),
    path('products/<int:pk>/comments/<int:comment_id>/', comment_detail),


    path('orders/', order_list),
    path('orders/<int:order_id>/', order_detail),

]
