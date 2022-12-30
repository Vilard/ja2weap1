from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from weapons.views import WeaponsModelViewSet

router = DefaultRouter()
router.register('weapons', WeaponsModelViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path(r'api/', include(router.urls)),
]
