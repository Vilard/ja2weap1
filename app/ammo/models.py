from django.db import models

class Ammo (models.Model):
    uiIndex = models.IntegerField(primary_key=True)
    AmmoCaliber = models.CharField(max_length=100)
    BRCaliber = models.CharField(max_length=100)
    
