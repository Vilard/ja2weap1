from rest_framework import serializers
from rest_framework.relations import HyperlinkedRelatedField
# from django_filters import FilterSet, AllValuesFilter, NumberFilter
from .models import Weapons
from ammo.models import Ammo 
from ammo.serializers import AmmoSerializer        

class WeaponSerializer(serializers.HyperlinkedModelSerializer):
    ubCalibre = serializers.SlugRelatedField(
        read_only=True,
        slug_field='BRCaliber'
        )

    class Meta:
        model = Weapons
        fields = [
        "uiIndex", 
        "szWeaponName", 
        "ubWeaponClass", 
        "ubWeaponType",
        "ubCalibre",
        "ubReadyTime", 
        "ubShotsPer4Turns", 
        "ubShotsPerBurst",
        "ubBurstPenalty", 
        "ubBulletSpeed", 
        "ubImpact", 
        "ubDeadliness",
        "bAccuracy", 
        "ubMagSize", 
        "usRange", 
        "nAccuracy",
        "usReloadDelay", 
        "BurstAniDelay",
        "ubAttackVolume", 
        "ubHitVolume", 
        "sSound", 
        "sBurstSound",
        "sSilencedBurstSound", 
        "sReloadSound", 
        "sLocknLoadSound",
        "SilencedSound", 
        "bBurstAP", 
        "bAutofireShotsPerFiveAP", 
        "APsToReload",
        "SwapClips", 
        "MaxDistForMessyDeath", 
        "AutoPenalty", 
        "NoSemiAuto",
        "EasyUnjam", 
        "APsToReloadManually", 
        "ManualReloadSound", 
        "bRecoilX", 
        "bRecoilY", 
        "ubAimLevels", 
        "ubRecoilDelay", 
        "Handling",
        "usOverheatingJamThreshold", 
        "usOverheatingDamageThreshold",
        "usOverheatingSingleShotTemperature"
    ]
