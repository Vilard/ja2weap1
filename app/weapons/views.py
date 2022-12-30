from rest_framework.viewsets import ModelViewSet
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import OrderingFilter, SearchFilter
from .models import Weapons
from .serializers import WeaponSerializer
# from .serializers import WeaponFilter
from django_filters import FilterSet, RangeFilter


fields_filters_user = [        
        "uiIndex", 
        "szWeaponName", 
        # "ubWeaponClass", 
        "ubWeaponType",
        "ubCalibre", 
        "ubReadyTime", 
        "ubShotsPer4Turns", 
        "ubShotsPerBurst",
        "ubBurstPenalty", 
        # "ubBulletSpeed", 
        "ubImpact", 
        # "ubDeadliness",
        # "bAccuracy", 
        "ubMagSize", 
        "usRange", 
        # "usReloadDelay", 
        # "BurstAniDelay",
        "ubAttackVolume", 
        "ubHitVolume", 
        # "sSound", 
        # "sBurstSound",
        # "sSilencedBurstSound", 
        # "sReloadSound", 
        # "sLocknLoadSound",
        # "SilencedSound", 
        "bBurstAP", 
        "bAutofireShotsPerFiveAP", 
        "APsToReload",
        # "SwapClips", 
        # "MaxDistForMessyDeath", 
        # "AutoPenalty", 
        # "NoSemiAuto",
        # "EasyUnjam", 
        "APsToReloadManually", 
        # "ManualReloadSound", 
        "nAccuracy",
        # "bRecoilX", 
        # "bRecoilY", 
        "ubAimLevels", 
        # "ubRecoilDelay", 
        "Handling",
        # "usOverheatingJamThreshold", 
        # "usOverheatingDamageThreshold",
        # "usOverheatingSingleShotTemperature"
    ]

class WeaponFilter(FilterSet):
    range = RangeFilter(field_name='usRange')
    ready_time = RangeFilter(field_name='ubReadyTime')
    shotper4turns = RangeFilter(field_name='ubShotsPer4Turns')
    ubShotsPerBurst = RangeFilter(field_name='ubShotsPerBurst')
    ubBurstPenalty = RangeFilter(field_name='ubBurstPenalty')
    ubImpact = RangeFilter(field_name='ubImpact')
    ubAttackVolume = RangeFilter(field_name='ubAttackVolume')
    ubMagSize = RangeFilter(field_name='ubMagSize')
    ubHitVolume = RangeFilter(field_name='ubHitVolume')
    bBurstAP = RangeFilter(field_name='bBurstAP')
    bAutofireShotsPerFiveAP = RangeFilter(field_name='bAutofireShotsPerFiveAP')
    APsToReload = RangeFilter(field_name='APsToReload')
    APsToReloadManually = RangeFilter(field_name='APsToReloadManually')
    nAccuracy = RangeFilter(field_name='nAccuracy')
    ubAimLevels = RangeFilter(field_name='ubAimLevels')
    Handling = RangeFilter(field_name='Handling')
        
    class Meta:
        model = Weapons
        fields = [
            'uiIndex',
            'szWeaponName', 
            'ubCalibre',
            'ubWeaponType',
            ]


class WeaponsModelViewSet(ModelViewSet):
    queryset = Weapons.objects.all()
    serializer_class = WeaponSerializer
    filter_backends = [
        SearchFilter, 
        DjangoFilterBackend,
        OrderingFilter
        ]
    search_fields = ['szWeaponName']
    filterset_class = WeaponFilter

    