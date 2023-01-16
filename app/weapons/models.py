from django.db import models
# from uuid import uuid4
from ammo.models import Ammo


# Create your models here.
class Weapons(models.Model):
    # id = models.UUIDField(primary_key=True, default=uuid4)
    id = models.AutoField(primary_key=True)
    uiIndex = models.IntegerField()
    szWeaponName = models.CharField(max_length=150)
    ubWeaponClass = models.IntegerField()
    ubWeaponType = models.IntegerField()
    ubCalibre = models.ForeignKey(Ammo,
                                  related_name='ammo',
                                  on_delete=models.CASCADE)


    ubReadyTime = models.IntegerField()
    ubShotsPer4Turns = models.FloatField()
    ubShotsPerBurst = models.IntegerField()
    ubBurstPenalty = models.IntegerField()
    ubBulletSpeed = models.IntegerField()
    ubImpact = models.IntegerField()
    ubDeadliness = models.IntegerField()
    bAccuracy = models.IntegerField()
    ubMagSize = models.IntegerField()
    usRange = models.IntegerField()
    usReloadDelay = models.IntegerField()
    BurstAniDelay = models.IntegerField()
    ubAttackVolume = models.IntegerField()
    ubHitVolume = models.IntegerField()
    sSound = models.IntegerField()
    sBurstSound = models.IntegerField()
    sSilencedBurstSound = models.IntegerField()
    sReloadSound = models.IntegerField()
    sLocknLoadSound = models.IntegerField()
    SilencedSound = models.IntegerField()
    bBurstAP = models.IntegerField()
    bAutofireShotsPerFiveAP = models.IntegerField()
    APsToReload = models.IntegerField()
    SwapClips = models.IntegerField()
    MaxDistForMessyDeath = models.IntegerField()
    AutoPenalty = models.IntegerField()
    NoSemiAuto = models.IntegerField()
    EasyUnjam = models.IntegerField()
    APsToReloadManually = models.IntegerField()
    ManualReloadSound = models.IntegerField()
    nAccuracy = models.IntegerField()
    bRecoilX = models.IntegerField()
    bRecoilY = models.IntegerField()
    ubAimLevels = models.IntegerField()
    ubRecoilDelay = models.IntegerField()
    Handling = models.IntegerField()
    usOverheatingJamThreshold = models.FloatField()
    usOverheatingDamageThreshold = models.FloatField()
    usOverheatingSingleShotTemperature = models.FloatField()
    # HeavyGun = models.IntegerField()
