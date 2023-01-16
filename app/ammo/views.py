from rest_framework.viewsets import ModelViewSet
from .models import Ammo
from .serializers import AmmoSerializer

class AmmoModelViewSet(ModelViewSet):
    queryset = Ammo.objects.all()
    serializer_class = AmmoSerializer