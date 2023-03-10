# Generated by Django 4.1.3 on 2022-12-07 17:26

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Weapons',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('uiIndex', models.IntegerField()),
                ('szWeaponName', models.CharField(max_length=150)),
                ('ubWeaponClass', models.IntegerField()),
                ('ubWeaponType', models.IntegerField()),
                ('ubCalibre', models.IntegerField()),
                ('ubReadyTime', models.IntegerField()),
                ('ubShotsPer4Turns', models.FloatField()),
                ('ubShotsPerBurst', models.IntegerField()),
                ('ubBurstPenalty', models.IntegerField()),
                ('ubBulletSpeed', models.IntegerField()),
                ('ubImpact', models.IntegerField()),
                ('ubDeadliness', models.IntegerField()),
                ('bAccuracy', models.IntegerField()),
                ('ubMagSize', models.IntegerField()),
                ('usRange', models.IntegerField()),
                ('usReloadDelay', models.IntegerField()),
                ('BurstAniDelay', models.IntegerField()),
                ('ubAttackVolume', models.IntegerField()),
                ('ubHitVolume', models.IntegerField()),
                ('sSound', models.IntegerField()),
                ('sBurstSound', models.IntegerField()),
                ('sSilencedBurstSound', models.IntegerField()),
                ('sReloadSound', models.IntegerField()),
                ('sLocknLoadSound', models.IntegerField()),
                ('SilencedSound', models.IntegerField()),
                ('bBurstAP', models.IntegerField()),
                ('bAutofireShotsPerFiveAP', models.IntegerField()),
                ('APsToReload', models.IntegerField()),
                ('SwapClips', models.IntegerField()),
                ('MaxDistForMessyDeath', models.IntegerField()),
                ('AutoPenalty', models.IntegerField()),
                ('NoSemiAuto', models.IntegerField()),
                ('EasyUnjam', models.IntegerField()),
                ('APsToReloadManually', models.IntegerField()),
                ('ManualReloadSound', models.IntegerField()),
                ('nAccuracy', models.IntegerField()),
                ('bRecoilX', models.IntegerField()),
                ('bRecoilY', models.IntegerField()),
                ('ubAimLevels', models.IntegerField()),
                ('ubRecoilDelay', models.IntegerField()),
                ('Handling', models.IntegerField()),
                ('usOverheatingJamThreshold', models.IntegerField()),
                ('usOverheatingDamageThreshold', models.IntegerField()),
                ('usOverheatingSingleShotTemperature', models.IntegerField()),
            ],
        ),
    ]
