
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('mjmgmt_users.urls')),
    path('', include('mjmgmt_anuncios.urls'))
]
