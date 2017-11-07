from django.conf.urls import url

from main_page import views

urlpatterns = [
    url(r'^$', views.main),
]
