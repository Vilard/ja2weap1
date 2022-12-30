from rest_framework import serializers
# from django_filters import FilterSet, AllValuesFilter, NumberFilter
from .models import Weapons

        

class WeaponSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Weapons
        fields = [
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
        "nAccuracy",
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
        "bRecoilX", 
        "bRecoilY", 
        "ubAimLevels", 
        "ubRecoilDelay", 
        "Handling",
        # "usOverheatingJamThreshold", 
        # "usOverheatingDamageThreshold",
        # "usOverheatingSingleShotTemperature"
    ]
